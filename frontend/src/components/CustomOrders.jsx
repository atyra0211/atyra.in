import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Check, ImagePlus, Info, Loader2, MessageCircle, Palette, X } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { BUDGET_OPTIONS, OCCASION_OPTIONS, PRODUCT_TYPES, waLink } from "@/config/site";

const API = `${process.env.REACT_APP_BACKEND_URL || "https://atyra-backend.onrender.com"}/api`;

const INITIAL = {
  name: "",
  email: "",
  whatsapp: "",
  occasion: "",
  product_type: "",
  color_theme: "",
  budget: "",
  quantity: "",
  delivery_date: "",
  details: "",
  inspiration_image: null,
};

const inputCls =
  "w-full rounded-2xl border border-beige bg-white px-4 py-3 text-sm text-ink outline-none transition-all duration-200 placeholder:text-cocoa/50 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20";

const STEPS = [
  { icon: ImagePlus, title: "Share your idea", text: "Add an inspiration photo and tell us the story behind the gift." },
  { icon: Palette, title: "Choose every detail", text: "Colours, theme, style and occasion — it's all up to you." },
  { icon: MessageCircle, title: "Get a custom quote", text: "We reply personally on WhatsApp or email with pricing and timeline." },
];

function validate(f) {
  const e = {};
  if (!f.name.trim()) e.name = "Please tell us your name";
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email)) e.email = "Enter a valid email address";
  if (!f.whatsapp.trim()) e.whatsapp = "We need a number to reach you";
  if (!f.occasion) e.occasion = "Pick an occasion";
  if (!f.product_type) e.product_type = "Pick a product type";
  if (!f.details.trim()) e.details = "Tell us a little about your idea";
  return e;
}

const Field = ({ label, required, error, testId, children }) => (
  <div>
    <label htmlFor={testId} className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-cocoa">
      {label} {required && <span className="text-terracotta">*</span>}
    </label>
    {children}
    {error && (
      <p data-testid={`error-${testId}`} className="mt-1.5 text-xs font-medium text-red-500">
        {error}
      </p>
    )}
  </div>
);

export default function CustomOrders({ preset }) {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (preset) setForm((f) => ({ ...f, ...preset }));
  }, [preset]);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const onFile = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (file.size > 3 * 1024 * 1024) {
      toast.error("Image must be under 3MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setForm((f) => ({ ...f, inspiration_image: reader.result }));
    reader.readAsDataURL(file);
  };

  const submit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      toast.error("Please fill in the required fields");
      return;
    }
    setSubmitting(true);
    try {
      const { data } = await axios.post(`${API}/enquiries`, {
        ...form,
        quantity: form.quantity ? Number(form.quantity) : null,
      });
setResult({
  ...data,
  name: form.name,
  id: data.id || crypto.randomUUID(),
});
toast.success("Enquiry received — we'll be in touch soon!");
    } catch (err) {
      toast.error("Something went wrong. Please try again or reach us on WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setForm(INITIAL);
    setErrors({});
    setResult(null);
  };

  const refCode = result ? `ATYRA-${result.id.slice(-6).toUpperCase()}` : "";
  const waHref = result
    ? waLink(
        `Hi Atyra! I just sent a custom order enquiry (${refCode}). Product: ${form.product_type}. Occasion: ${form.occasion}.`
      )
    : "#";

  return (
    <section id="custom-orders" className="scroll-mt-24 bg-blush/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Custom Orders"
              title="Have Something Special in Mind?"
              description="Tell us what you're imagining, and we'll create something especially for you."
            />

            <div className="mt-10 space-y-6">
              {STEPS.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.08}>
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-terracotta shadow-sm">
                      <step.icon size={19} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-serif text-lg text-ink">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-cocoa">{step.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-10 flex items-start gap-3 rounded-2xl border border-terracotta/20 bg-white/70 p-5">
                <Info size={18} className="mt-0.5 shrink-0 text-terracotta" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-cocoa">
                  This form is an <strong className="text-ink">enquiry only</strong> — not an automatic
                  purchase. We'll confirm every detail, price and timeline with you before anything is made.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            {result ? (
              <div
                data-testid="enquiry-success"
                className="rounded-[2rem] border border-sage bg-white p-8 text-center shadow-[0_20px_60px_rgba(45,38,35,0.08)] sm:p-12"
              >
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-sage text-ink">
                  <Check size={28} aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-serif text-3xl text-ink">Thank you, {result.name}!</h3>
                <p className="mt-3 leading-relaxed text-cocoa">
                  Your enquiry <strong className="text-terracotta">{refCode}</strong> has been received.
                  We'll review your idea and get back to you with a custom quote.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    data-testid="success-whatsapp-continue"
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(37,211,102,0.4)]"
                  >
                    Continue on WhatsApp <MessageCircle size={16} />
                  </a>
                  <button
                    data-testid="success-another-enquiry"
                    onClick={reset}
                    className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition-colors duration-300 hover:border-terracotta hover:text-terracotta"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form
                data-testid="custom-order-form"
                onSubmit={submit}
                noValidate
                className="rounded-[2rem] bg-white p-6 shadow-[0_20px_60px_rgba(45,38,35,0.08)] sm:p-9"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" required error={errors.name} testId="input-full-name">
                    <input
                      id="input-full-name"
                      data-testid="input-full-name"
                      className={inputCls}
                      placeholder="Your name"
                      value={form.name}
                      onChange={set("name")}
                    />
                  </Field>
                  <Field label="Email" required error={errors.email} testId="input-email">
                    <input
                      id="input-email"
                      data-testid="input-email"
                      type="email"
                      className={inputCls}
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={set("email")}
                    />
                  </Field>
                  <Field label="WhatsApp Number" required error={errors.whatsapp} testId="input-whatsapp">
                    <input
                      id="input-whatsapp"
                      data-testid="input-whatsapp"
                      type="tel"
                      className={inputCls}
                      placeholder="+91 00000 00000"
                      value={form.whatsapp}
                      onChange={set("whatsapp")}
                    />
                  </Field>
                  <Field label="Occasion" required error={errors.occasion} testId="select-occasion">
                    <select
                      id="select-occasion"
                      data-testid="select-occasion"
                      className={inputCls}
                      value={form.occasion}
                      onChange={set("occasion")}
                    >
                      <option value="">Choose an occasion</option>
                      {OCCASION_OPTIONS.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Product Type" required error={errors.product_type} testId="select-product-type">
                    <select
                      id="select-product-type"
                      data-testid="select-product-type"
                      className={inputCls}
                      value={form.product_type}
                      onChange={set("product_type")}
                    >
                      <option value="">What are we making?</option>
                      {PRODUCT_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Preferred Colour / Theme" error={null} testId="input-colour-theme">
                    <input
                      id="input-colour-theme"
                      data-testid="input-colour-theme"
                      className={inputCls}
                      placeholder="Blush pink & sage, floral…"
                      value={form.color_theme}
                      onChange={set("color_theme")}
                    />
                  </Field>
                  <Field label="Approximate Budget" error={null} testId="input-budget">
                    <select
                      id="input-budget"
                      data-testid="input-budget"
                      className={inputCls}
                      value={form.budget}
                      onChange={set("budget")}
                    >
                      <option value="">Optional</option>
                      {BUDGET_OPTIONS.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Quantity" error={null} testId="input-quantity">
                    <input
                      id="input-quantity"
                      data-testid="input-quantity"
                      type="number"
                      min="1"
                      className={inputCls}
                      placeholder="1"
                      value={form.quantity}
                      onChange={set("quantity")}
                    />
                  </Field>
                  <div className="sm:col-span-2">
                    <Field label="Preferred Delivery Date" error={null} testId="input-delivery-date">
                      <input
                        id="input-delivery-date"
                        data-testid="input-delivery-date"
                        type="date"
                        className={inputCls}
                        value={form.delivery_date}
                        onChange={set("delivery_date")}
                      />
                    </Field>
                  </div>
                  <div className="sm:col-span-2">
                    <Field label="Customisation Details" required error={errors.details} testId="textarea-details">
                      <textarea
                        id="textarea-details"
                        data-testid="textarea-details"
                        rows="4"
                        className={inputCls}
                        placeholder="Tell us about the person, the occasion, colours, theme, anything…"
                        value={form.details}
                        onChange={set("details")}
                      />
                    </Field>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      data-testid="file-upload-inspiration"
                      className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-beige bg-cream/50 px-4 py-7 text-center transition-colors duration-200 hover:border-terracotta/50 hover:bg-blush/30"
                    >
                      {form.inspiration_image ? (
                        <div className="relative">
                          <img
                            src={form.inspiration_image}
                            alt="Inspiration preview"
                            className="h-28 w-28 rounded-xl object-cover"
                          />
                          <button
                            type="button"
                            data-testid="remove-inspiration-image"
                            onClick={(e) => {
                              e.preventDefault();
                              setForm((f) => ({ ...f, inspiration_image: null }));
                            }}
                            className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-ink text-cream"
                            aria-label="Remove image"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ) : (
                        <>
                          <ImagePlus size={26} className="text-terracotta" aria-hidden="true" />
                          <span className="text-sm font-semibold text-ink">Upload inspiration image</span>
                          <span className="text-xs text-cocoa/70">Optional · JPG or PNG · up to 3MB</span>
                        </>
                      )}
                      <input type="file" accept="image/*" className="hidden" onChange={onFile} />
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  data-testid="submit-custom-order-button"
                  disabled={submitting}
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-8 py-4 text-sm font-bold uppercase tracking-wider text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:shadow-[0_16px_40px_rgba(200,125,103,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending…
                    </>
                  ) : (
                    "Submit Enquiry"
                  )}
                </button>
                <p className="mt-4 text-center text-xs leading-relaxed text-cocoa/80">
                  Submitting this form sends an enquiry only — we'll confirm details and pricing with you
                  before anything is made.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

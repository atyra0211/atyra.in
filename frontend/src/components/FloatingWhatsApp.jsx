import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/config/site";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="whatsapp-float-button"
          aria-label="Chat with Atyra on WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-[0_14px_34px_rgba(37,211,102,0.45)]"
        >
          <MessageCircle size={24} aria-hidden="true" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

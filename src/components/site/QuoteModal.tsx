"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, MessageCircle, Loader2 } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { CONTACTS } from "@/content/data";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  prefill?: string;
}

const EMPTY_FORM = {
  name: "",
  company: "",
  phone: "",
  email: "",
  qty: "",
  dest: "",
  msg: "",
};

export default function QuoteModal({ open, onOpenChange, prefill }: QuoteModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* mount only while open → state (incl. prefill) resets on every open */}
      {open ? <QuoteInner prefill={prefill} onOpenChange={onOpenChange} /> : null}
    </Dialog>
  );
}

/* Content unmounts when the dialog closes → state resets on every open. */
function QuoteInner({
  prefill,
  onOpenChange,
}: {
  prefill?: string;
  onOpenChange: (v: boolean) => void;
}) {
  const { t, lang } = useLang();
  const [form, setForm] = useState(() => ({ ...EMPTY_FORM, msg: prefill ?? "" }));
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const valid = form.name.trim().length > 1 && form.phone.trim().length > 5;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid || sending) return;
    setSending(true);
    // DEMO: will be wired to email / backend after hosting.
    window.setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 700);
  };

  const waGreeting =
    lang === "fa"
      ? "سلام، برای پیگیری استعلام قیمت تماس گرفتم."
      : "Hello, I am following up on my quotation request.";

  return (
    <DialogContent className="max-h-[92svh] overflow-y-auto border-[rgba(201,165,78,0.28)] bg-[#0b0b10]/97 p-6 backdrop-blur-xl sm:max-w-lg sm:p-8">
        {sent ? (
          <div className="flex flex-col items-center py-8 text-center">
            <CheckCircle2 className="mb-5 h-16 w-16 text-[#e6c87f]" />
            <h3 className="text-xl font-bold text-[#f3efe4]">{t.modal.successTitle}</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#a49c8a]">{t.modal.successMsg}</p>
            <a
              href={`https://wa.me/${CONTACTS.whatsappPrimary}?text=${encodeURIComponent(waGreeting)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex h-11 items-center gap-2 rounded-full bg-[#1faa53] px-6 text-sm font-bold text-white transition-all hover:brightness-110"
            >
              <MessageCircle className="h-4.5 w-4.5" />
              WhatsApp · {CONTACTS.offices[0].name}
            </a>
            <button
              onClick={() => onOpenChange(false)}
              className="mt-4 text-[13px] text-[#8d8674] underline-offset-4 hover:text-[#e6c87f] hover:underline"
            >
              {t.modal.close}
            </button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-[#f3efe4]">{t.modal.title}</DialogTitle>
              <DialogDescription className="text-[13px] leading-6 text-[#a49c8a]">
                {t.modal.sub}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={submit} className="mt-5 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <Label htmlFor="q-name" className="text-[#cfc7b4]">
                    {t.modal.name} <span className="text-[#c9a54e]">*</span>
                  </Label>
                  <Input
                    id="q-name"
                    required
                    value={form.name}
                    onChange={set("name")}
                    className="border-[rgba(201,165,78,0.22)] bg-white/[0.04] text-[#f3efe4] placeholder:text-[#6b6353] focus-visible:ring-[#c9a54e]"
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="q-company" className="text-[#cfc7b4]">
                    {t.modal.company}
                  </Label>
                  <Input
                    id="q-company"
                    value={form.company}
                    onChange={set("company")}
                    className="border-[rgba(201,165,78,0.22)] bg-white/[0.04] text-[#f3efe4] placeholder:text-[#6b6353] focus-visible:ring-[#c9a54e]"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <Label htmlFor="q-phone" className="text-[#cfc7b4]">
                    {t.modal.phone} <span className="text-[#c9a54e]">*</span>
                  </Label>
                  <Input
                    id="q-phone"
                    required
                    dir="ltr"
                    inputMode="tel"
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="+98 …"
                    className="border-[rgba(201,165,78,0.22)] bg-white/[0.04] text-start text-[#f3efe4] placeholder:text-[#6b6353] focus-visible:ring-[#c9a54e]"
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="q-email" className="text-[#cfc7b4]">
                    {t.modal.email}
                  </Label>
                  <Input
                    id="q-email"
                    type="email"
                    dir="ltr"
                    value={form.email}
                    onChange={set("email")}
                    className="border-[rgba(201,165,78,0.22)] bg-white/[0.04] text-start text-[#f3efe4] placeholder:text-[#6b6353] focus-visible:ring-[#c9a54e]"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <Label htmlFor="q-qty" className="text-[#cfc7b4]">
                    {t.modal.qty}
                  </Label>
                  <Input
                    id="q-qty"
                    value={form.qty}
                    onChange={set("qty")}
                    className="border-[rgba(201,165,78,0.22)] bg-white/[0.04] text-[#f3efe4] placeholder:text-[#6b6353] focus-visible:ring-[#c9a54e]"
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="q-dest" className="text-[#cfc7b4]">
                    {t.modal.dest}
                  </Label>
                  <Input
                    id="q-dest"
                    value={form.dest}
                    onChange={set("dest")}
                    className="border-[rgba(201,165,78,0.22)] bg-white/[0.04] text-[#f3efe4] placeholder:text-[#6b6353] focus-visible:ring-[#c9a54e]"
                  />
                </div>
              </div>

              <div className="grid gap-1.5">
                <Label htmlFor="q-msg" className="text-[#cfc7b4]">
                  {t.modal.msg}
                </Label>
                <Textarea
                  id="q-msg"
                  rows={3}
                  value={form.msg}
                  onChange={set("msg")}
                  className="resize-none border-[rgba(201,165,78,0.22)] bg-white/[0.04] text-[#f3efe4] placeholder:text-[#6b6353] focus-visible:ring-[#c9a54e]"
                />
              </div>

              <button
                type="submit"
                disabled={!valid || sending}
                className="mt-1 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#e6c87f] to-[#c9a54e] text-[15px] font-bold text-[#181206] shadow-[0_12px_40px_-10px_rgba(201,165,78,0.5)] transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-45"
              >
                {sending && <Loader2 className="h-4.5 w-4.5 animate-spin" />}
                {t.modal.submit}
              </button>

              <p className="text-center text-[11px] leading-5 text-[#6b6353]">{t.modal.demoNote}</p>
            </form>
          </>
        )}
      </DialogContent>
  );
}

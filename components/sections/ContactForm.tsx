"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CONTACT_SYMPTOMS, CONTACT_METHODS } from "@/lib/constants";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  symptoms: string[];
  contactMethod: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    symptoms: [],
    contactMethod: "Either",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const toggleSymptom = (symptom: string) => {
    setForm((prev) => ({
      ...prev,
      symptoms: prev.symptoms.includes(symptom)
        ? prev.symptoms.filter((s) => s !== symptom)
        : [...prev.symptoms, symptom],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const formData = new FormData();
      formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "");
      formData.append("name", form.name.trim());
      formData.append("email", form.email.trim());
      formData.append("phone", form.phone.trim() || "Not provided");
      formData.append("message", form.message.trim());
      formData.append("symptoms", form.symptoms.length > 0 ? form.symptoms.join(", ") : "None selected");
      formData.append("preferred_contact", form.contactMethod);
      // Subject line Kim will see in her inbox
      formData.append("subject", `New message from ${form.name.trim()} — BHRT with Kim`);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
          symptoms: [],
          contactMethod: "Either",
        });
      } else {
        setErrorMsg(data.message || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Unable to send your message. Please check your connection and try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12 px-6 rounded-3xl bg-mist">
        <CheckCircle2 className="mx-auto size-16 text-success mb-4" />
        <h3 className="font-heading text-2xl font-semibold text-bark mb-2">
          Message Sent!
        </h3>
        <p className="text-clay max-w-md mx-auto">
          Thank you for reaching out. Kim will review your message and get back to
          you within 1-2 business days. In the meantime, feel free to explore our
          resources.
        </p>
        <Button
          onClick={() => setStatus("idle")}
          className="mt-6 bg-moss text-white rounded-full px-6 hover:bg-forest transition-colors"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name & Email */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" className="text-bark font-medium">
            Name <span className="text-error">*</span>
          </Label>
          <Input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mt-1.5 rounded-xl border-stone bg-white focus:border-sage"
            placeholder="Your full name"
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-bark font-medium">
            Email <span className="text-error">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-1.5 rounded-xl border-stone bg-white focus:border-sage"
            placeholder="you@example.com"
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="phone" className="text-bark font-medium">
          Phone <span className="text-clay text-sm">(optional)</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="mt-1.5 rounded-xl border-stone bg-white focus:border-sage"
          placeholder="(555) 123-4567"
        />
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message" className="text-bark font-medium">
          Message <span className="text-error">*</span>
        </Label>
        <Textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="mt-1.5 rounded-xl border-stone bg-white focus:border-sage resize-none"
          placeholder="Tell us about what you're experiencing and how we can help..."
        />
      </div>

      {/* Symptom Checklist */}
      <fieldset>
        <legend className="text-bark font-medium mb-3">
          Are you experiencing any of these? <span className="text-clay text-sm">(optional)</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {CONTACT_SYMPTOMS.map((symptom) => {
            const selected = form.symptoms.includes(symptom);
            return (
              <button
                key={symptom}
                type="button"
                onClick={() => toggleSymptom(symptom)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  selected
                    ? "bg-moss text-white border-moss"
                    : "bg-white text-bark border-stone hover:border-sage"
                }`}
                aria-pressed={selected}
              >
                {symptom}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Preferred Contact Method */}
      <fieldset>
        <legend className="text-bark font-medium mb-3">
          Preferred contact method
        </legend>
        <div className="flex gap-3">
          {CONTACT_METHODS.map((method) => (
            <button
              key={method}
              type="button"
              onClick={() => setForm({ ...form, contactMethod: method })}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                form.contactMethod === method
                  ? "bg-forest text-white border-forest"
                  : "bg-white text-bark border-stone hover:border-sage"
              }`}
              aria-pressed={form.contactMethod === method}
            >
              {method}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Error message */}
      {status === "error" && (
        <div className="flex items-start gap-2 p-4 rounded-xl bg-error/10 text-error" role="alert">
          <AlertCircle className="size-5 mt-0.5 shrink-0" />
          <p className="text-sm">{errorMsg}</p>
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-moss text-white rounded-full py-3 text-base font-medium hover:bg-forest transition-colors disabled:opacity-50"
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <Loader2 className="size-4 animate-spin" />
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}

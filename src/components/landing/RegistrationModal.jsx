import React, { useState } from 'react';

export default function RegistrationModal({ open, setOpen, lang = 'ar' }) {
const [loading, setLoading] = useState(false);

if (!open) return null;

const handleSubmit = async (e) => {
e.preventDefault();
setLoading(true);

const formData = new FormData(e.target);

try {
  await fetch('https://hooks.zapier.com/hooks/catch/XXXXXX', {
    method: 'POST',
    body: formData,
  });

  setOpen(false);
  alert(lang === 'ar' ? 'تم التسجيل بنجاح' : 'Registered successfully');

} catch {
  alert(lang === 'ar' ? 'حدث خطأ' : 'Error occurred');
}

setLoading(false);
};

return ( <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"> <div className="bg-white p-8 rounded-2xl w-full max-w-md">

    <h2 className="text-2xl font-bold mb-6 text-center">
      {lang === 'ar' ? 'سجّل اهتمامك' : 'Register Interest'}
    </h2>

    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        name="name"
        required
        placeholder={lang === 'ar' ? 'الاسم' : 'Name'}
        className="w-full p-3 border rounded-lg"
      />

      <input
        name="email"
        required
        placeholder="Email"
        className="w-full p-3 border rounded-lg"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-[#0F172A] text-white rounded-lg"
      >
        {loading
          ? (lang === 'ar' ? 'جاري الإرسال...' : 'Sending...')
          : (lang === 'ar' ? 'إرسال' : 'Submit')}
      </button>

    </form>

    <button
      onClick={() => setOpen(false)}
      className="mt-4 text-sm text-slate-500 w-full"
    >
      {lang === 'ar' ? 'إغلاق' : 'Close'}
    </button>

  </div>
</div>
);
}

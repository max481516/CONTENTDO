// Server Component: hidden forms so Netlify can detect and provision them at build time
export default function NetlifyFormsDetect() {
  return (
    <div style={{ display: 'none' }} aria-hidden>
      <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" />
        <input type="tel" name="phone" />
        <input type="text" name="bot-field" />
      </form>

      <form name="order" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="order" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <textarea name="description" />
        {/* one representative hidden file URL field for parser awareness */}
        <input type="hidden" name="fileUrl_1" />
        <input type="text" name="bot-field" />
      </form>
    </div>
  );
}

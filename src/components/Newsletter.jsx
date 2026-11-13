import { useState } from "react";
import useReveal from "../hooks/useReveal";

export default function Newsletter() {
  const ref = useReveal();
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | error | done

  const submit = (e) => {
    e.preventDefault();
    const valid = /^\S+@\S+\.\S+$/.test(email);
    if (!valid || !agree) return setStatus("error");
    // Hook up your email provider here (Mailchimp, Klaviyo, etc.).
    setStatus("done");
  };

  return (
    <section className="section newsletter reveal" ref={ref}>
      <div className="container newsletter__inner">
        <p className="section-label">La Lettre de la Maison</p>
        <h2 className="display">
          Be the first <em>to know.</em>
        </h2>
        <p>
          Private previews, atelier stories and invitations — four letters a season, never more.
        </p>

        {status === "done" ? (
          <p className="newsletter__thanks">Merci. Your first letter is on its way.</p>
        ) : (
          <form onSubmit={submit} noValidate>
            <div className="newsletter__row">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
                aria-invalid={status === "error" && !/^\S+@\S+\.\S+$/.test(email)}
              />
              <button className="btn btn--solid" type="submit">
                Subscribe
              </button>
            </div>
            <label className="newsletter__agree">
              <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
              <span>I agree to receive La Lettre and accept the Privacy Policy.</span>
            </label>
            {status === "error" && (
              <p className="newsletter__error" role="alert">
                Please enter a valid email and accept the policy.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}

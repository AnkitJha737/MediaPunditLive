import Layout from "../components/Layout";
import { useForm, ValidationError } from '@formspree/react';


const ProjectBrief = () => {
  const [state, handleSubmit] = useForm("manbyynl"); // 👈 your Formspree Project Brief ID
  if (state.succeeded) {
    return (
      <Layout>
        <section className="py-20 text-center">
          <h2 className="text-3xl font-semibold mb-4">Thanks for submitting your brief!</h2>
          <p className="text-muted-foreground">We'll get back to you within 24–48 hours.</p>
        </section>
      </Layout>
    );
  }
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let’s Get <span className="text-primary">Started</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Tell us a little about your project. We’ll get back with a proposal within 24–48 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} method="POST" className="space-y-6 bg-card border rounded-xl p-8 shadow-sm">
            <input type="hidden" name="form-source" value="project-brief" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input name="Name" type="text" className="w-full input" placeholder="Ashok Kumar" required />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email Address</label>
                <input name="Email" type="email" className="w-full input" placeholder="you@example.com" required />
              </div>
              <div>
                <label className="block mb-1 font-medium">Phone Number</label>
                <input name="Phone" type="tel" className="w-full input" placeholder="Required" required />
              </div>
              <div>
                <label className="block mb-1 font-medium">Company Name</label>
                <input name="Company" type="text" className="w-full input" placeholder="Required" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 font-medium">Project Type</label>
                <select name="Project Type" className="w-full input">
                  <option>Branding</option>
                  <option>Website Design</option>
                  <option>Video Production</option>
                  <option>Marketing Campaign</option>
                  <option>Social Media</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 font-medium">Budget Range</label>
                <select name="Budget Range" className="w-full input">
                  <option>₹50K–₹1L</option>
                  <option>₹1L–₹3L</option>
                  <option>₹3L–₹5L</option>
                  <option>₹5L+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Timeline</label>
              <input name="Timeline" type="text" className="w-full input" placeholder="E.g., 4 weeks" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Project Description</label>
              <textarea name="description"
                rows={5}
                className="w-full input"
                placeholder="Tell us about your goals, audience, and what success looks like for you."
              ></textarea>
            </div>

            <div>
              <label className="block mb-1 font-medium">Upload Brief (optional)</label>
              <input type="file" className="w-full input" />
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Submit Brief
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectBrief;
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 my-18">
      <h1 className="text-3xl font-semibold text-center mb-6">
        Privacy Policy
      </h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">HIPAA Compliance</h2>
        <p className="text-lg mt-2">
          At AI Medical Scribe, we are committed to protecting the privacy and
          security of all protected health information (PHI) in accordance with
          HIPAA regulations.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">
          Data Retention and Disposal Policy
        </h2>
        <p className="text-lg mt-2">
          AI Medical Scribe retains medical documentation records for a minimum
          of 6 years from the date of service barring any outstanding requests
          or issues. After this retention period:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>
            Records are disposed of in a HIPAA-compliant manner by shredding
            paper records and permanently deleting electronic PHI.
          </li>
          <li>
            Backup electronic records may be stored for longer periods for
            disaster recovery purposes but are de-identified if retained past 6
            years.
          </li>
          <li>
            Exception: Records subject to litigation holds will be retained
            until the hold expires.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Quality Assurance Policy</h2>
        <p className="text-lg mt-2">
          AI Medical Scribe follows rigorous quality assurance (QA) procedures
          for AI-generated encounter documentation:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>
            Automated checks: NLP algorithms scan all notes to detect any
            potential errors or inconsistencies.
          </li>
          <li>
            Manual auditing: A sample of visit notes are reviewed by our
            clinical documentation specialists monthly.
          </li>
          <li>
            Target accuracy: Our target is 98% accuracy on key documentation
            elements like medications, diagnosis codes, symptoms, etc.
          </li>
          <li>
            Physician feedback: Doctors can report any errors found after
            submission.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

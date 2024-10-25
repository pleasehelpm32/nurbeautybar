// app/policies/page.jsx
export default function PoliciesPage() {
  return (
    <main className="bg-creamy min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-5xl space-y-12">
        {/* Booking Policy Card */}
        <div className="bg-white rounded-3xl shadow-lg border-2 border-dark/10 p-6 md:p-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-8">
              Booking Policy
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-dark/80">
              Please Read the Following Prior to Booking an Appointment
            </p>
          </div>

          {/* Policy List */}
          <div className="space-y-6 mb-16">
            {/* Deposit */}
            <div className="flex gap-4 items-start">
              <div className="w-3 h-3 rounded-full bg-dark mt-3 shrink-0"></div>
              <p className="text-xl md:text-2xl text-dark/80 leading-relaxed">
                There is a{" "}
                <span className="font-semibold text-dark">
                  $30 non-refundable deposit
                </span>{" "}
                required to book an appointment at NUR BEAUTY BAR (This payment
                goes towards the service, and the remainder will be paid on the
                day of the appointment in either cash or email transfer)
              </p>
            </div>

            {/* Cancellation */}
            <div className="flex gap-4 items-start">
              <div className="w-3 h-3 rounded-full bg-dark mt-3 shrink-0"></div>
              <p className="text-xl md:text-2xl text-dark/80 leading-relaxed">
                Rescheduling or cancelling any appointment must be made at least{" "}
                <span className="font-semibold text-dark">24 hours prior</span>{" "}
                to the appointment in order to obtain your deposit
              </p>
            </div>

            {/* After Hours */}
            <div className="flex gap-4 items-start">
              <div className="w-3 h-3 rounded-full bg-dark mt-3 shrink-0"></div>
              <p className="text-xl md:text-2xl text-dark/80 leading-relaxed">
                For any bookings after hours (9pm onwards) there is an
                additional fee of{" "}
                <span className="font-semibold text-dark">$30</span>
              </p>
            </div>

            {/* Fill Requirements */}
            <div className="flex gap-4 items-start">
              <div className="w-3 h-3 rounded-full bg-dark mt-3 shrink-0"></div>
              <p className="text-xl md:text-2xl text-dark/80 leading-relaxed">
                To be considered a fill, there must be at least{" "}
                <span className="font-semibold text-dark">
                  40% of lashes remaining
                </span>{" "}
                (outgrown lashes removed)
              </p>
            </div>

            {/* Fill Recommendations */}
            <div className="flex gap-4 items-start">
              <div className="w-3 h-3 rounded-full bg-dark mt-3 shrink-0"></div>
              <p className="text-xl md:text-2xl text-dark/80 leading-relaxed">
                Fills are recommended every{" "}
                <span className="font-semibold text-dark">2-3 weeks</span>{" "}
                depending on your retention and natural lash cycle (anything
                past 4 weeks will be considered a new full set)
              </p>
            </div>

            {/* Late Policy */}
            <div className="flex gap-4 items-start">
              <div className="w-3 h-3 rounded-full bg-dark mt-3 shrink-0"></div>
              <p className="text-xl md:text-2xl text-dark/80 leading-relaxed">
                If you are running late, please notify us ASAP as rescheduling
                may be necessary (after 10/15 minutes, the appointment will be
                automatically cancelled)
              </p>
            </div>

            {/* No Show */}
            <div className="flex gap-4 items-start">
              <div className="w-3 h-3 rounded-full bg-dark mt-3 shrink-0"></div>
              <p className="text-xl md:text-2xl text-dark/80 leading-relaxed">
                No show = Lost deposit
              </p>
            </div>

            {/* Clean Lashes */}
            <div className="flex gap-4 items-start">
              <div className="w-3 h-3 rounded-full bg-dark mt-3 shrink-0"></div>
              <p className="text-xl md:text-2xl text-dark/80 leading-relaxed">
                Please arrive with{" "}
                <span className="font-semibold text-dark">CLEAN LASHES</span>{" "}
                (no mascara, no makeup residue, false eyelash glue, oil, etc.),
                as this will make the lashing process more efficient and
                increase your retention!
              </p>
            </div>

            {/* Foreign Fills */}
            <div className="flex gap-4 items-start">
              <div className="w-3 h-3 rounded-full bg-dark mt-3 shrink-0"></div>
              <p className="text-xl md:text-2xl text-dark/80 leading-relaxed">
                Foreign fills are an additional{" "}
                <span className="font-semibold text-dark">$15</span>
              </p>
            </div>

            {/* No Guests */}
            <div className="flex gap-4 items-start">
              <div className="w-3 h-3 rounded-full bg-dark mt-3 shrink-0"></div>
              <p className="text-xl md:text-2xl text-dark/80 leading-relaxed">
                No guests and/or pets are allowed
              </p>
            </div>

            {/* Parking */}
            <div className="flex gap-4 items-start">
              <div className="w-3 h-3 rounded-full bg-dark mt-3 shrink-0"></div>
              <p className="text-xl md:text-2xl text-dark/80 leading-relaxed">
                Free parking is available
              </p>
            </div>
          </div>

          {/* Thank You Message */}
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-semibold text-dark">
              Thank You for Choosing NUR BEAUTY BAR & We Hope to See You Soon!
            </p>
          </div>
        </div>

        {/* Cookie Policy Card */}
        <div className="bg-white rounded-3xl shadow-lg border-2 border-dark/10 p-6 md:p-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-8">
              Cookie Policy
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-dark/80">
              How We Use Cookies
            </p>
          </div>

          <div className="space-y-6 mb-16">
            {/* What Are Cookies */}
            <div className="flex gap-4 items-start">
              <div className="w-3 h-3 rounded-full bg-dark mt-3 shrink-0"></div>
              <p className="text-xl md:text-2xl text-dark/80 leading-relaxed">
                Cookies are small text files that are stored on your device when
                you visit our website. They help us provide you with a better
                experience by remembering your preferences and analyzing how you
                use our site.
              </p>
            </div>

            {/* Types of Cookies */}
            <div className="flex gap-4 items-start">
              <div className="w-3 h-3 rounded-full bg-dark mt-3 shrink-0"></div>
              <p className="text-xl md:text-2xl text-dark/80 leading-relaxed">
                We use{" "}
                <span className="font-semibold text-dark">
                  essential cookies
                </span>{" "}
                to make our website work and{" "}
                <span className="font-semibold text-dark">
                  analytics cookies
                </span>{" "}
                (Google Analytics) to understand how you use our site.
              </p>
            </div>

            {/* How We Use Them */}
            <div className="flex gap-4 items-start">
              <div className="w-3 h-3 rounded-full bg-dark mt-3 shrink-0"></div>
              <p className="text-xl md:text-2xl text-dark/80 leading-relaxed">
                We use cookies to:
                <br />- Remember your preferences
                <br />- Analyze site traffic and usage
                <br />- Improve our services
                <br />- Enhance your browsing experience
              </p>
            </div>

            {/* Your Choices */}
            <div className="flex gap-4 items-start">
              <div className="w-3 h-3 rounded-full bg-dark mt-3 shrink-0"></div>
              <p className="text-xl md:text-2xl text-dark/80 leading-relaxed">
                You can choose to{" "}
                <span className="font-semibold text-dark">
                  accept or decline cookies
                </span>
                . While essential cookies are necessary for the website to
                function properly, you can opt out of analytics cookies at any
                time through our cookie consent banner.
              </p>
            </div>

            {/* Contact Information */}
            <div className="flex gap-4 items-start">
              <div className="w-3 h-3 rounded-full bg-dark mt-3 shrink-0"></div>
              <p className="text-xl md:text-2xl text-dark/80 leading-relaxed">
                If you have any questions about our cookie policy, please
                contact us.
              </p>
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-center">
            <p className="text-xl text-dark/60">Last Updated: October 2024</p>
          </div>
        </div>
      </div>
    </main>
  );
}

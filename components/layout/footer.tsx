export default function Footer() {
  return (
    <footer className="w-full py-12 bg-black border-t border-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-medium mb-4">COMPANY INFO</h3>
            <p className="text-white/70 text-sm mb-4">
              Tech Yes! Solutions is a digital agency specializing in web development, mobile apps, and custom software
              solutions.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M10.5 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v3.5" />
                  <path d="M20 14v4a2 2 0 0 1-2 2h-2" />
                  <path d="M13 18h.01" />
                  <path d="M17 18h.01" />
                  <path d="M13 14h.01" />
                  <path d="M17 14h.01" />
                </svg>
              </div>
              <span className="text-white font-bold">Tech Yes!</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">CONTACT INFO</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>123 Tech Street, Suite 100</li>
              <li>San Francisco, CA 94107</li>
              <li>info@techyes.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">OUR SERVICES</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Systems Strategy</li>
              <li>Software Development</li>
              <li>Managed Services</li>
              <li>Web & Mobile Apps</li>
              <li>Analytics & Automation</li>
              <li>Consulting</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">OUR SOLUTIONS</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Enterprise Solutions</li>
              <li>E-commerce Platforms</li>
              <li>Mobile Applications</li>
              <li>Custom Software</li>
              <li>Cloud Services</li>
              <li>Data Analytics</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-white/50 text-xs">
          © 2023 Tech Yes! Solutions. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}


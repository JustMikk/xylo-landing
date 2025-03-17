import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-medium mb-4">COMPANY INFO</h3>
            <p className="text-white/70 text-md mb-4">
              Xylo Digital Solutions is a digital agency specializing in web
              development, mobile apps, and custom software solutions.
            </p>
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                className="mt-3"
                alt="logo"
                width={100}
                height={100}
              />

              <span className="text-white font-bold">
                Xylo Digital Solutions
              </span>
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

          {/* <div>
            <h3 className="text-white font-medium mb-4">OUR SOLUTIONS</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Enterprise Solutions</li>
              <li>E-commerce Platforms</li>
              <li>Mobile Applications</li>
              <li>Custom Software</li>
              <li>Cloud Services</li>
              <li>Data Analytics</li>
            </ul>
          </div> */}

          <div>
            <Image
              src="/images/map.png"
              alt="footer map"
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-white/50 text-xs">
          © 2025 Xylo Digital Solutions. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

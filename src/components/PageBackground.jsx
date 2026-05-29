export default function PageBackground({ desktopImage, mobileImage, children }) {
  return (
    <div className="relative min-h-screen w-full">
      {/* Desktop bg */}
      <div
        className="hidden md:block fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${desktopImage})` }}
      />
      {/* Mobile bg */}
      <div
        className="md:hidden fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${mobileImage})` }}
      />
      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-black/15" />
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {children}
      </div>
    </div>
  );
}
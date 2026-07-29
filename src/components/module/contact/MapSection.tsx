interface MapSectionProps {
  /** Address or query string to display on the map */
  locationQuery?: string;
}

export function MapSection({
  locationQuery = 'Abuja, Federal Capital Territory, Nigeria',
}: MapSectionProps) {
  // URL-encode the address string so it forms a valid URL
  const encodedLocation = encodeURIComponent(locationQuery);
  const embedUrl = `https://maps.google.com/maps?q=${encodedLocation}&t=&z=11&ie=UTF8&iwloc=&output=embed`;

  return (
    <section
      aria-label="Office location map"
      className="w-full py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-[#1e3a6e]/40 shadow-xl backdrop-blur-md p-2">
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-xl sm:rounded-2xl overflow-hidden">
          <iframe
            title="Interactive Google Map showing office location in Abuja, Nigeria"
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-xl sm:rounded-2xl contrast-[102%] opacity-95"
          />
        </div>
      </div>
    </section>
  );
}

import { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
   * @description The main title of the hero section.
   * @format textarea
   */
  title?: string;
  /**
   * @description The subtitle of the hero section.
   * @format textarea
   * @description The color of the subtitle.
   * @format color-input
   */
  subtitleColor?: string;
  /**
   * @description The background color of the hero section.
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @description The placeholder text for the email input field.
   */
  emailPlaceholder?: string;
  /**
   * @description The text for the submit button.
   */
  buttonText?: string;
  /**
   * @description The image for the hero section.
   */
  image?: ImageWidget;
}

export default function HeroSection({
  title = "Join Our Newsletter",
  subtitleColor = "#22c55e",
  subtitle = "Stay up to date with our latest news and offers.",
  backgroundColor = "#6b46c1",
  emailPlaceholder = "Enter your email",
  buttonText = "Subscribe",
  image,
}: Props) {
  return (
    <section class="text-white" style={{ backgroundColor }}>
      <div class="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <div class="mb-8 md:mb-0 md:w-1/2">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p class="text-lg md:text-xl mb-8" style={{ color: subtitleColor }}>
            {subtitle}
          </p>
          <form class="flex flex-col md:flex-row">
            <input
              type="email"
              placeholder={emailPlaceholder}
              class="bg-white text-gray-900 rounded-l-lg px-4 py-2 md:w-2/3 focus:outline-none"
            />
            <button class="bg-indigo-600 text-white rounded-r-lg px-6 py-2 md:w-1/3 hover:bg-indigo-700 transition duration-300 ease-in-out">
              {buttonText}
            </button>
          </form>
        </div>
        {image && (
          <div class="md:w-1/2">
            <img src={image} alt="Hero Image" class="w-full h-auto rounded-lg shadow-lg" />
          </div>
        )}
      </div>
    </section>
  );
}
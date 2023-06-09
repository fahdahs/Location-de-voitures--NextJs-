import Logo from "@/assets/location de voiture laayoune.png";
import Image from "next/image";

export default function ErrorPage() {

  return (
    <>
      <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-shrink-0 justify-center">
            <a href="https://locationdevoiturealaayoune.com/" className="inline-flex">
              <span className="sr-only">Your Company</span>
              <Image
                className="h-12 w-auto"
                src={Logo}
                alt="lvl location de voiture laayoune"
              />
            </a>
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-base font-semibold text-blue-600">404</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Page not found.
              </h1>
              <p className="mt-2 text-base text-gray-500">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className="mt-6">
                <a
                  href="https://locationdevoiturealaayoune.com/"
                  className="text-base font-medium text-blue-600 hover:text-blue-500"
                >
                    Go back home
                    <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

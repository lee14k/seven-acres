import Link from 'next/link'

export default function LandscapeFill() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-base font-semibold leading-7 text-indigo-600">Beautiful blooms, planted for you</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">You pick the greens, we do the rest</h1>
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  Need some help with your lawn? Need a new garden? We can help! We have the experience, the tools, and the knowledge to help you create the garden or lawn of your dreams.
                </p>
                <p className="mt-8">
                  In addition to providing the plants, we can provide our design services to help you create the perfect garden or lawn. We can help you choose the right plants for your space, and we can help you design the layout of your garden or lawn. We can also help you with the installation of your garden or lawn, and we can help you maintain it.
                </p>
              </div>
              <div>
                <p>
                  We have a wide selection of plants to choose from, including perennials, annuals, shrubs, and trees. We can help you choose the right plants for your space to ensure sustainability and beauty. 
                </p>
                <p className="mt-8">
                 Not sure if we'll do it? Want to check and ensure we offer the right plants? Contact us and we'll be happy to help you with your garden or lawn needs.
                </p>
              </div>
            </div>
            <div className="mt-10 flex">
              <Link
                href="/contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16 lg:pt-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              src="/Flowers_Lo-Res-8319.jpg"
              alt=""
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
import Link from 'next/link'
export default function RepairFill() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-base font-semibold leading-7 text-indigo-600">Reliable, local repairs</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Quality work at affordable prices</h1>
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                When our planting season winds down, we turn to local homeowners to help upkeep their properties with our repair services. We offer a variety of services to help you maintain your home.
                </p>
                <p className="mt-8">
                  With decades of experience, we can assist you with almost any home repair project. We can help you with everything from fixing a leaky faucet to fixing up your kitchen. We can also help you with larger projects, such as building a deck or adding a room to your home. We can help you with both interior and exterior repairs, and we can help you with both small and large projects.
                </p>
              </div>
              <div>
                <p>
                  We are licensed, and insured so you can trust us to do the job right. We are also locally owned and operated, so you can trust us to provide you with the best service possible. We are committed to providing you with quality work at affordable prices, and we are committed to providing you with the best customer service possible.
                </p>
                <p className="mt-8">
                Not sure if we'll do it? Want to check with us? Contact us and we'll be happy to help you with your home repair and project needs.
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
  
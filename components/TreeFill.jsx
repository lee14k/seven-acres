import Link from 'next/link'
export default function TreeFill() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-base font-semibold leading-7 text-indigo-600">Need some trees?</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We've got you covered</h1>
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
               Trees are a great way to add beauty and value to your property. They can provide shade, privacy, and a natural habitat for wildlife. They can also help reduce your energy bills by providing shade in the summer and windbreaks in the winter. Let us help you pick, place, and maintain your trees.
                </p>
                <p className="mt-8">
                We have a wide variety of trees to choose from. We can help you choose the right trees for your space, and we can help you find the perfect spot for your new tree. We can also help you with the installation of your trees, and we can help you maintain them.
                </p>
              </div>
              <div>
                <p>
                  We are committed to providing you with quality trees at affordable prices. We are also committed to providing you with the best customer service possible.  We are also locally owned and operated, so you can trust us to provide you with the best service possible.
                </p>
                <p className="mt-8">
                Not sure if we'll do it? Want to check and ensure we offer the right trees? Contact us and we'll be happy to help you with your tree planting needs
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
  
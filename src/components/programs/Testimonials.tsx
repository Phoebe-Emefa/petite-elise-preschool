import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Card, CardContent } from "../ui/card"

const testimonials = [
  {
    quote: "The preschool program has been amazing for our daughter. She's learned so much!",
    author: "Sarah M.",
    role: "Parent",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote: "The summer program kept my kids engaged and excited all season long.",
    author: "Michael L.",
    role: "Parent",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote: "The after-school program provides the perfect balance of fun and learning.",
    author: "Emily R.",
    role: "Parent",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-primary">What Parents Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <CardContent className="pt-6 pb-8 px-6">
                <blockquote className="text-lg italic mb-6 text-gray-700">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div className="flex items-center">
                  <Avatar className="h-14 w-14 mr-6 border-2 border-[#007f94]">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback className="text-lg font-semibold text-primary">
                      {testimonial.author[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-lg text-gray-800">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

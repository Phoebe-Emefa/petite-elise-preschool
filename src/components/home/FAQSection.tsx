import { FAQItem } from './FAQItem'

const faqs = [
  {
    question: "What age groups do you cater to?",
    answer: "We welcome children from 2 to 4 years old in our daycare program. Our activities and care are tailored to meet the developmental needs of each age group."
  },
  {
    question: "What are your operating hours?",
    answer: "Our daycare is open from 7:30 AM to 6:00 PM, Monday through Friday. We offer flexible schedules including half-day, full-day, and extended day options to accommodate various family needs."
  },
  {
    question: "What is your staff-to-child ratio?",
    answer: "We maintain a low staff-to-child ratio to ensure each child receives individual attention. For 2-year-olds, we have a 1:4 ratio, and for 3-4 year-olds, we maintain a 1:6 ratio."
  },
  {
    question: "Do you provide meals and snacks?",
    answer: "Yes, we provide nutritious meals and snacks that are prepared fresh daily. We accommodate dietary restrictions and allergies. Our menu is designed by a certified nutritionist to ensure balanced and child-friendly options."
  },
  {
    question: "What is your approach to early childhood education?",
    answer: "We follow a play-based learning approach that encourages curiosity, creativity, and social skills. Our curriculum includes activities that promote cognitive, physical, and emotional development, preparing children for future academic success."
  }
]

export function FAQSection() {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}


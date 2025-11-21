import { useState } from 'react'

const data = [
  {
    question: "React nima?", // Accordion sarlavhasi
    answer: "React — UI yaratish uchun JavaScript kutubxonasi." // Ochilganda chiqadigan matn
  },
  {
    question: "useState nima qiladi?",
    answer: "useState komponent ichida o'zgaruvchi holat yaratadi."
  },
  {
    question: "Tailwind CSS nima?",
    answer: "Tailwind — utility-based CSS framework."
  }
];

function App() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div  className='w-full h-screen bg-gray-100 flex flex-col items-center p-10'>
      <h1 className='text-3xl font-bold mb-6 text-blue-600'>
        Day 11 - Accordion Component
      </h1>
      <div className='w-full max-w-xl space-y-4'>

        {data.map((item, index) => (
          <div
            key={index}
            className='bg-white shadow-md rounded-xl p-4 cursor-pointer'
            onClick={() => toggle(index)}
          >
            <div className='flex justify-between items-center'>
              <h2 className='text-lg font-semibold'>
                {item.question}
              </h2>

              <span className='text-2xl'>
                {openIndex === index ? "-" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <p className='mt-3 text-gray-700'>
                {item.answer} 
              </p>
            )}

          </div>
        ))}

      </div>
    </div>
  )
}

export default App

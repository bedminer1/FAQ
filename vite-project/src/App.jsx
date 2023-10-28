// import { useState } from 'react'
import Accordian from './Components/Accordian'
import './App.css'

const questions = [
  {
    id: 1,
    question: 'test'
  }
]

function App() {

  return (
    <div className='main'>
      <h1>KD15 BREAKDOWN</h1>
      <div className='accordian'>
      <Accordian
          title="Traction"
          text="Traction is multi-directional and grips every surface very well. The traction pattern isn’t exactly like the traction on the Nike Kobe 9, but at first glance, it really does give off some Kobe 9 vibes. The grip is excellent, maybe not Kobe 9 level, but still great."
        />
        <Accordian
          title="Cushion"
          text="The cushion setup is the same as in the KD 14, which is great, considering the KD 14 was one of the most comfortable rides of the year. The midsole foam is Cushlon, that’s soft and plush. The strobel board is a full-length Zoom Air unit that’s springy under your feet. This year, they feel lower to the ground for better stability."
        />
        <Accordian
          title="Support"
          text="Support on the KD 15 is excellent, and a slight upgrade on last year’s model. Even with the removal of the midfoot strap, you still get all the support you need. There’s the traditional heel counter. Both lateral and medial sides have been reinforced with TPU pieces to act as lockdown wings. They also help catch you on hard side-to-side movements. The key here is to get the right size."
        />
        <Accordian
          title="Materials"
          text="The materials on the KD 15 are nothing special but they do their job well while keeping the shoe lightweight and comfortable. We’re grateful that the annoying strap from the last model was removed. Now, you don’t have to worry about the strap loosening and flapping around when you’re out there playing your best."
        />
      </div>
    </div>
  )
}

export default App

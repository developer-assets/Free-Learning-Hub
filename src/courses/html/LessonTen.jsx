import React, { useState } from 'react'
import Footer from '../../components/Footer'
import SubFooter from '../../components/SubFooter'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { atelierEstuaryLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Quiz from './Questions/Quiz'
import QuizTen from './Questions/QuizTen.json'
import { useNavigate } from 'react-router-dom';

const LessonNine = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState(false);
  const isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const codeString1 =`
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>`;

  const codeString2 =`
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>`;

  return (
    <div className='mt-10 w-full pr-2 overflow-x-auto'>
      <h1 className='font-bold text-2xl md:text-3xl'>List Creation</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Creating lists in HTML is essential for organizing and presenting information in a structured manner. HTML supports both ordered (numbered) and unordered (bulleted) lists.</p>
        <p>Here's how to create lists using HTML:</p>
        <h4 className='text-xl font-bold'>Unordered List (bulleted list)</h4>
        <p>Use the <span className='cs dark:dcs'>&lt;ul&gt;</span> (unordered list) element to create an unordered list. Each list item is denoted by the <span className='cs dark:dcs'>&lt;li&gt;</span> (list item) element.</p>
        <SyntaxHighlighter className="syntax" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString1}
        </SyntaxHighlighter>
        <p>This will display three unordered list items with dots to their left.</p>
        <h4 className='text-xl font-bold'>Ordered List (numbered list)</h4>
        <p>Use the <span className='cs dark:dcs'>&lt;ol&gt;</span> (ordered list) element to create an ordered list. Again, each list item is denoted by the <span className='cs dark:dcs'>&lt;li&gt;</span> element.</p>
        <SyntaxHighlighter className="syntax" language='xml' style={isDarkTheme ? anOldHope : atelierEstuaryLight}>
          {codeString2}
        </SyntaxHighlighter>
        <p>This will display three ordered list items that are numbered.</p>
        



      </article>

      <div className='flex max-w-[90vw] flex-col mb-10 gap-2'>
        <button className='bg-green-500 py-2 px-12 rounded-lg font-bold justify-center items-center cursor-not-allowed'>NO PROJECT YET</button>
        <button onClick={() => setQuestions(true)} className='bg-green-500 py-2 px-12 rounded-lg font-bold justify-center items-center'> {questions ? 'IN PROGRESS....' : 'COMPLETE QUIZ'} </button>
      </div>

      { questions && (
        <div className='w-full h-[70vh]'>
          <div className='bg-gray-200 rounded-md dark:bg-gray-800 h-full w-full'>
            <Quiz data={QuizTen} />
          </div>
          <div>
            <button onClick={() => setQuestions(false)} className='bg-green-500 py-2 w-full px-12 rounded-lg mt-6 font-bold justify-center items-center'> FINISH & CONTINUE </button>
          </div>
        </div>
      )}

      <div>
        <SubFooter
          t1="Image Embedding"
          l1="/learn/html/image-embedding"
          t2="Style Definition"
          l2="/learn/html/style-definition"
          edit="https://github.com/developer-assets/Free-Learning-Hub/blob/main/src/courses/html/LessonTen.jsx"
        />
      </div>

      <div className='mt-24 relative'>
        <Footer />
      </div>

    </div>
  )
}

export default LessonNine
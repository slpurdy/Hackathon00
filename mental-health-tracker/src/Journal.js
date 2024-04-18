// //import React, { useState } from 'react'

// const Journal = () => {
//     const [journalEntries, setJournalEntries] = useState([]);

//     const saveEntry = (entryText, mood, emotion) => {
//         const entry = { text: entryText, mood: mood, emotion: emotion };
//         setJournalEntries([...journalEntries, entry]);
//     };

//     return (
//         <div>
//             <h1>Journal App</h1>
//             <button onClick={() => saveEntry('Today was a good day.', 'happy', 'content')}>
//                 Add Journal Entry
//             </button>
//             <div id="entries">
//                 {journalEntries.map((entry, index) => (
//                     <div key={index}>
//                         <p><strong>Mood:</strong> {entry.mood}, <strong>Emotion:</strong> {entry.emotion}</p>
//                         <p>{entry.text}</p>
//                         <hr />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Journal//

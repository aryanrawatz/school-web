import { useState } from "react";

function Faq() {

const [selected,setSelected]=useState(null);

const data=[
{
question:"What is the admission process?",
answer:"Fill the online admission form and visit the campus for document verification."
},
{
question:"Do you provide transport facilities?",
answer:"Yes, buses are available across the city."
},
{
question:"Are smart classes available?",
answer:"Yes, every classroom is equipped with smart boards."
}
];

return (
<section className="faq">

<h1>Frequently Asked Questions</h1>

{
data.map((item,index)=>(

<div
className="faq-card"
key={index}
onClick={()=>setSelected(selected===index ? null : index)}
>

<h3>{item.question}</h3>

{
selected===index &&
<p>{item.answer}</p>
}

</div>

))
}

</section>
);
}

export default Faq;
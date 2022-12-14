import React from 'react';
import './Blogs.css';

const Blogs = () => {
    
    return (
        <div className='mt-5'>
          <div class="container">
  <div class="row">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12">
     <h3 className='text-secondary fw-bold'>1. Context API কি ? এটি কি কাজে লাগে ?
</h3>
<p> কোনো প্রকার Props Drilling না করেই নিচের দিকের কোনো চাইল্ড তার উপরের দিকের কম্পোনেন্টের ডাটার এক্সেস পাওয়ার যে উপায় সেটিই হলো Context API. ধরা যাক, Reactjs এর এমন একটি কম্পোনেন্টে ডাটা পাঠাতে হবে যেটি কিনা n তম কম্পোনেন্ট । এই অবস্থায় আমরা props drilling না করেই Context API এর মাধ্যমে খুব সহজেই সেই n তম কম্পোনেন্টে ডাটা পাঠাতে পারি ।
এখানে মূলত একটি Context তৈরি করা হয় এবং এটি একটি ফাইল থেকে এক্সপোর্ট করে দিতে হয় । এই Context টি ২টা কম্পোনেন্ট প্রভাইড করে থাকে যেগুলো হলো Provider এবং Consumer. আর এরপর প্যারেন্ট কম্পোনেন্টকে Provider কম্পোনেন্টের মাধ্যমে র‍্যাপিং করে দিতে হবে । ব্যাস আমাদের কাজ শেষ । এবার শুধু আমরা Provider কে একটা ভেল্যু সেট করে দিবো, সেটা হতে পারে স্ট্যাটিক বা ডাইনামিক । শেষে যে চাইল্ড Context টাকে রিসিভ করতে তাকে Consumer কম্পোনেন্ট দিয়ে র‍্যাপিং করে দিবো এবং একটি এনোনিমাইস ফাংশনের মাধ্যমে ডাটাকে রিসিভ করবে ।</p>
    </div>
   
  </div>
  <div class="row">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12">
     <h3 className='text-secondary fw-bold'>2.Inline, Block এবং Inline Block এর মধ্যে পার্থক্য কি ??
</h3>
<p> Inline, Block এবং Inline Block এর মধ্যে পার্থক্যঃ
  <br></br>
Inline: ইনলাইন ইলিমেন্ট গুলো একটার পর একটা বসতে থাকে অর্থাৎ একটা লাইন ধরে । এরা সবসময় পাশাপাশি বসে, যতটা জায়গা প্রয়োজন হয় ততটাই দখল করে । কিছু ইনলাইন ইলিমেন্ট হলোঃ b, big, i, small, img ইত্যাদি ।
<br></br>
<br></br>
Block: ব্লক ইলিমেন্ট গুলো মূলত ইলিমেন্ট এর সমস্ত জায়গা জুড়ে থাকে । এই ইলিমেন্ট গুলো শুরু হয় সব সময় নতুন লাইন থেকে । সাধারণত ব্লক ইলিমেন্ট এর ভেতর ইনলাইন বা ব্লক ইলিমেন্ট ২টাই থাকতে পারে । কিছু ব্লক ইলিমেন্ট হলোঃ p , h1, h2, h3, h4, h5 , h6 , ul , ol , dl , hr , blockquo ইত্যাদি ।
<br></br>
<br></br>
Inline-Block: যখন কোনো ইলিমেন্টকে ইনলাইন রেখে ব্লকের বৈশিষ্ট এপ্লাই করা যায় তখন সেই ইলিমেন্টকেই মূলত Inline-Block ইলিমেন্ট বলা হয়ে থাকে । এক্ষেত্রে আমরা display: inline-block Css টি ব্যবহার করে থাকি । এবং পাশাপাশি ব্লক ইলিমেন্টের যেসব সিএসএস ব্যবহার করা জায় সেগুলোও ব্যবহার করে থাকি ।</p>
    </div>
   
  </div>
</div>
        </div>
    )}     


export default Blogs;
import React from 'react';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">About Us</h1>
      <p className="text-slate-600 mb-6 leading-relaxed">
        We specialize in building responsive, modern user interfaces with React and Tailwind CSS.
        By combining declarative routing via React Router with utility-first CSS, you get maintainable,
        production-ready architectures.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-800 text-lg mb-1">React Router v6</h3>
          <p className="text-sm text-slate-500">
            Handles client-side browser navigation without requesting new HTML documents from the server.
          </p>
        </div>
        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-800 text-lg mb-1">Tailwind CSS</h3>
          <p className="text-sm text-slate-500">
            Rapid UI development with atomic utility classes directly integrated into component templates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
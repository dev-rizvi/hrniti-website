'use client';

import React, { useRef, useEffect, useState } from 'react';
import { 
  Bold, 
  Italic, 
  Underline, 
  Heading2, 
  Heading3, 
  List, 
  ListOrdered, 
  Link, 
  Image, 
  Code, 
  Eye, 
  Trash2 
} from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (val: string) => void;
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isCodeView, setIsCodeView] = useState(false);
  const [htmlValue, setHtmlValue] = useState(value);

  // Sync internal editor element with value from parent
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value;
    }
    setHtmlValue(value);
  }, [value]);

  const handleInput = () => {
    if (editorRef.current) {
      const content = editorRef.current.innerHTML;
      onChange(content);
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setHtmlValue(val);
    onChange(val);
  };

  const executeCommand = (command: string, val: string = '') => {
    document.execCommand(command, false, val);
    handleInput();
  };

  const addLink = () => {
    const url = prompt('Enter the link URL:');
    if (url) {
      executeCommand('createLink', url);
    }
  };

  const addImage = () => {
    const url = prompt('Enter the image URL:');
    if (url) {
      executeCommand('insertImage', url);
    }
  };

  const formatBlock = (tag: string) => {
    executeCommand('formatBlock', `<${tag}>`);
  };

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 bg-slate-50 border-b border-slate-200 p-2 select-none">
        <button
          type="button"
          onClick={() => executeCommand('bold')}
          className="p-1.5 hover:bg-slate-200 text-slate-700 rounded transition-colors"
          title="Bold"
        >
          <Bold className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => executeCommand('italic')}
          className="p-1.5 hover:bg-slate-200 text-slate-700 rounded transition-colors"
          title="Italic"
        >
          <Italic className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => executeCommand('underline')}
          className="p-1.5 hover:bg-slate-200 text-slate-700 rounded transition-colors"
          title="Underline"
        >
          <Underline className="h-4 w-4" />
        </button>
        
        <div className="w-px h-5 bg-slate-300 mx-1" />

        <button
          type="button"
          onClick={() => formatBlock('h2')}
          className="p-1.5 hover:bg-slate-200 text-slate-700 rounded transition-colors"
          title="Heading 2"
        >
          <Heading2 className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => formatBlock('h3')}
          className="p-1.5 hover:bg-slate-200 text-slate-700 rounded transition-colors"
          title="Heading 3"
        >
          <Heading3 className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => formatBlock('p')}
          className="p-1.5 hover:bg-slate-200 text-slate-700 rounded transition-colors font-bold text-xs"
          title="Paragraph"
        >
          P
        </button>

        <div className="w-px h-5 bg-slate-300 mx-1" />

        <button
          type="button"
          onClick={() => executeCommand('insertUnorderedList')}
          className="p-1.5 hover:bg-slate-200 text-slate-700 rounded transition-colors"
          title="Bullet List"
        >
          <List className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => executeCommand('insertOrderedList')}
          className="p-1.5 hover:bg-slate-200 text-slate-700 rounded transition-colors"
          title="Numbered List"
        >
          <ListOrdered className="h-4 w-4" />
        </button>

        <div className="w-px h-5 bg-slate-300 mx-1" />

        <button
          type="button"
          onClick={addLink}
          className="p-1.5 hover:bg-slate-200 text-slate-700 rounded transition-colors"
          title="Insert Link"
        >
          <Link className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={addImage}
          className="p-1.5 hover:bg-slate-200 text-slate-700 rounded transition-colors"
          title="Insert Image"
        >
          <Image className="h-4 w-4" />
        </button>

        <div className="w-px h-5 bg-slate-300 mx-1" />

        <button
          type="button"
          onClick={() => executeCommand('removeFormat')}
          className="p-1.5 hover:bg-slate-200 text-slate-700 rounded transition-colors"
          title="Clear Format"
        >
          <Trash2 className="h-4 w-4" />
        </button>

        <div className="ml-auto flex items-center gap-1">
          <button
            type="button"
            onClick={() => setIsCodeView(false)}
            className={`px-2 py-1 rounded transition-all text-xs font-bold flex items-center gap-1 ${!isCodeView ? 'bg-[#006B3F] text-white' : 'text-slate-500 hover:bg-slate-200'}`}
          >
            <Eye className="h-3.5 w-3.5" /> Visual
          </button>
          <button
            type="button"
            onClick={() => setIsCodeView(true)}
            className={`px-2 py-1 rounded transition-all text-xs font-bold flex items-center gap-1 ${isCodeView ? 'bg-[#006B3F] text-white' : 'text-slate-500 hover:bg-slate-200'}`}
          >
            <Code className="h-3.5 w-3.5" /> HTML
          </button>
        </div>
      </div>

      {/* Editor Content Area */}
      <div className="p-4 bg-white min-h-[300px]">
        <div
          ref={editorRef}
          contentEditable
          onInput={handleInput}
          className={`w-full min-h-[280px] outline-none prose prose-slate max-w-none text-slate-800 text-sm font-medium ${isCodeView ? 'hidden' : 'block'}`}
          style={{ wordBreak: 'break-word' }}
        />
        <textarea
          value={htmlValue}
          onChange={handleTextareaChange}
          className={`w-full min-h-[280px] outline-none font-mono text-xs text-slate-800 border-0 p-0 resize-y focus:ring-0 ${isCodeView ? 'block' : 'hidden'}`}
          placeholder="Enter raw HTML content here..."
        />
      </div>
    </div>
  );
}

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
  Link2,
  Image, 
  Code, 
  Eye, 
  Trash2,
  ChevronDown,
  Search,
  Check
} from 'lucide-react';
import { INTERNAL_LINK_TARGETS } from '@/lib/internalLinksData';

interface RichTextEditorProps {
  value: string;
  onChange: (val: string) => void;
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isCodeView, setIsCodeView] = useState(false);
  const [htmlValue, setHtmlValue] = useState(value);
  const [showRoutePicker, setShowRoutePicker] = useState(false);
  const [routeSearch, setRouteSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

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
          title="Custom URL Link"
        >
          <Link className="h-4 w-4" />
        </button>

        {/* Website Route Internal Linker Popover */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowRoutePicker(!showRoutePicker)}
            className={`px-2 py-1 hover:bg-emerald-100 text-emerald-800 rounded-lg text-xs font-bold transition-all flex items-center gap-1 border ${
              showRoutePicker ? 'bg-emerald-100 border-emerald-300' : 'bg-emerald-50 border-emerald-200'
            }`}
            title="Link selected text to an HR Niti website page"
          >
            <Link2 className="h-3.5 w-3.5 text-emerald-700" />
            <span>Site Route</span>
            <ChevronDown className="h-3 w-3 text-emerald-600" />
          </button>

          {showRoutePicker && (
            <div 
              ref={dropdownRef}
              className="absolute left-0 top-full mt-1.5 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 z-50 p-2 text-xs font-sans animate-fadeIn"
            >
              <div className="flex items-center gap-1.5 px-2 py-1.5 bg-slate-50 rounded-xl border border-slate-200 mb-2">
                <Search className="h-3.5 w-3.5 text-slate-400" />
                <input
                  type="text"
                  value={routeSearch}
                  onChange={(e) => setRouteSearch(e.target.value)}
                  placeholder="Search HR Niti pages..."
                  className="bg-transparent text-xs outline-none w-full text-slate-800 font-medium"
                  autoFocus
                />
              </div>

              <div className="max-h-56 overflow-y-auto space-y-0.5 divide-y divide-slate-50">
                {INTERNAL_LINK_TARGETS
                  .filter(t => 
                    t.title.toLowerCase().includes(routeSearch.toLowerCase()) || 
                    t.route.toLowerCase().includes(routeSearch.toLowerCase()) ||
                    t.keywords.some(k => k.toLowerCase().includes(routeSearch.toLowerCase()))
                  )
                  .map(target => (
                    <button
                      key={target.route}
                      type="button"
                      onClick={() => {
                        executeCommand('createLink', target.route);
                        setShowRoutePicker(false);
                        setRouteSearch('');
                      }}
                      className="w-full text-left px-2.5 py-1.5 hover:bg-emerald-50 rounded-lg transition-colors cursor-pointer group flex flex-col"
                    >
                      <span className="font-bold text-slate-800 group-hover:text-emerald-700">
                        {target.title}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {target.route}
                      </span>
                    </button>
                  ))}
              </div>
            </div>
          )}
        </div>

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

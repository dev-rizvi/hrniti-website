"use client";
import React, { useState, useRef } from "react";
import { 
  Plus, Edit2, Trash2, ZoomIn, ZoomOut, Search, X, 
  User, DollarSign, MapPin, Mail, Phone, Calendar, 
  Users, ArrowRightLeft, Sparkles, Maximize2, Layout, HelpCircle
} from "lucide-react";

interface Employee {
  id: string;
  name: string;
  title: string;
  department: string;
  managerId: string | null;
  status: 'active' | 'remote' | 'leave' | 'meeting' | 'hiring';
  email: string;
  phone: string;
  salary: number;
  location: string;
  hireDate: string;
}

interface EmployeeTreeNode extends Employee {
  children: EmployeeTreeNode[];
}

const INITIAL_EMPLOYEES: Employee[] = [
  {
    id: "1",
    name: "Vikram Sharma",
    title: "Chief Executive Officer",
    department: "Executive",
    managerId: null,
    status: "active",
    email: "vikram.sharma@hrniti.com",
    phone: "+91 98765 43210",
    salary: 350000,
    location: "Mumbai HQ",
    hireDate: "2020-01-15"
  },
  {
    id: "2",
    name: "Neha Reddy",
    title: "Chief Technology Officer",
    department: "Engineering",
    managerId: "1",
    status: "active",
    email: "neha.reddy@hrniti.com",
    phone: "+91 98765 43211",
    salary: 280000,
    location: "Bangalore Hub",
    hireDate: "2020-03-10"
  },
  {
    id: "3",
    name: "Sameer Deshmukh",
    title: "Chief Marketing Officer",
    department: "Marketing",
    managerId: "1",
    status: "meeting",
    email: "sameer.d@hrniti.com",
    phone: "+91 98765 43212",
    salary: 240000,
    location: "Mumbai HQ",
    hireDate: "2020-06-20"
  },
  {
    id: "4",
    name: "Shalini Iyer",
    title: "Chief Operations Officer",
    department: "Operations",
    managerId: "1",
    status: "active",
    email: "shalini.iyer@hrniti.com",
    phone: "+91 98765 43213",
    salary: 240000,
    location: "Mumbai HQ",
    hireDate: "2020-02-01"
  },
  {
    id: "5",
    name: "Rahul Singhal",
    title: "VP of Enterprise Sales",
    department: "Sales",
    managerId: "1",
    status: "remote",
    email: "rahul.singhal@hrniti.com",
    phone: "+91 98765 43214",
    salary: 260000,
    location: "Delhi Office",
    hireDate: "2021-01-10"
  },
  // Under Neha Reddy (CTO)
  {
    id: "6",
    name: "Amit Patel",
    title: "VP of Engineering",
    department: "Engineering",
    managerId: "2",
    status: "active",
    email: "amit.patel@hrniti.com",
    phone: "+91 98765 43215",
    salary: 200000,
    location: "Bangalore Hub",
    hireDate: "2020-08-15"
  },
  {
    id: "7",
    name: "Divya Sen",
    title: "Product Director",
    department: "Product",
    managerId: "2",
    status: "meeting",
    email: "divya.sen@hrniti.com",
    phone: "+91 98765 43216",
    salary: 190000,
    location: "Bangalore Hub",
    hireDate: "2021-04-18"
  },
  // Under Amit Patel (VP Eng)
  {
    id: "8",
    name: "Rohan Das",
    title: "Lead Frontend Engineer",
    department: "Engineering",
    managerId: "6",
    status: "remote",
    email: "rohan.das@hrniti.com",
    phone: "+91 98765 43217",
    salary: 140000,
    location: "Kolkata Remote",
    hireDate: "2021-09-01"
  },
  {
    id: "9",
    name: "Priya Nair",
    title: "Backend Architect",
    department: "Engineering",
    managerId: "6",
    status: "active",
    email: "priya.nair@hrniti.com",
    phone: "+91 98765 43218",
    salary: 160000,
    location: "Bangalore Hub",
    hireDate: "2021-02-15"
  },
  {
    id: "10",
    name: "Suresh Kumar",
    title: "QA Automation Lead",
    department: "Engineering",
    managerId: "6",
    status: "leave",
    email: "suresh.kumar@hrniti.com",
    phone: "+91 98765 43219",
    salary: 110000,
    location: "Pune Office",
    hireDate: "2021-11-10"
  },
  // Under Divya Sen (Product PM)
  {
    id: "11",
    name: "Arjun Mehta",
    title: "Senior Product Manager",
    department: "Product",
    managerId: "7",
    status: "active",
    email: "arjun.mehta@hrniti.com",
    phone: "+91 98765 43220",
    salary: 150000,
    location: "Delhi Office",
    hireDate: "2022-03-01"
  },
  {
    id: "12",
    name: "Kiara Lal",
    title: "Lead UI/UX Designer",
    department: "Design",
    managerId: "7",
    status: "remote",
    email: "kiara.lal@hrniti.com",
    phone: "+91 98765 43221",
    salary: 125000,
    location: "Pune Office",
    hireDate: "2021-07-22"
  },
  // Under Sameer Deshmukh (CMO)
  {
    id: "13",
    name: "Riya Kapoor",
    title: "Growth & SEO Lead",
    department: "Marketing",
    managerId: "3",
    status: "active",
    email: "riya.kapoor@hrniti.com",
    phone: "+91 98765 43222",
    salary: 110000,
    location: "Mumbai HQ",
    hireDate: "2022-01-10"
  },
  {
    id: "14",
    name: "Aditi Rao",
    title: "Senior Content Creator",
    department: "Marketing",
    managerId: "3",
    status: "remote",
    email: "aditi.rao@hrniti.com",
    phone: "+91 98765 43223",
    salary: 95000,
    location: "Hyderabad Remote",
    hireDate: "2022-06-01"
  },
  // Under Shalini Iyer (COO)
  {
    id: "15",
    name: "Rajesh Pillai",
    title: "HR Director",
    department: "Human Resources",
    managerId: "4",
    status: "active",
    email: "rajesh.pillai@hrniti.com",
    phone: "+91 98765 43224",
    salary: 160000,
    location: "Mumbai HQ",
    hireDate: "2020-05-15"
  },
  {
    id: "16",
    name: "Mahesh Joshi",
    title: "Finance Controller",
    department: "Finance",
    managerId: "4",
    status: "active",
    email: "mahesh.joshi@hrniti.com",
    phone: "+91 98765 43225",
    salary: 140000,
    location: "Mumbai HQ",
    hireDate: "2021-05-20"
  },
  // Under Rajesh Pillai (HR)
  {
    id: "17",
    name: "Pooja Verma",
    title: "Lead TA Specialist",
    department: "Human Resources",
    managerId: "15",
    status: "meeting",
    email: "pooja.verma@hrniti.com",
    phone: "+91 98765 43226",
    salary: 105000,
    location: "Bangalore Hub",
    hireDate: "2021-10-05"
  },
  // Under Rahul Singhal (VP Sales)
  {
    id: "18",
    name: "Sneha Gupta",
    title: "Enterprise Sales Rep",
    department: "Sales",
    managerId: "5",
    status: "active",
    email: "sneha.gupta@hrniti.com",
    phone: "+91 98765 43227",
    salary: 130000,
    location: "Delhi Office",
    hireDate: "2022-02-15"
  },
  {
    id: "19",
    name: "Tanmay Shah",
    title: "Customer Success Lead",
    department: "Sales",
    managerId: "5",
    status: "active",
    email: "tanmay.shah@hrniti.com",
    phone: "+91 98765 43228",
    salary: 120000,
    location: "Mumbai HQ",
    hireDate: "2022-04-10"
  }
];

const getDeptTheme = (dept: string) => {
  const d = dept.toLowerCase();
  if (d.includes('exec')) {
    return {
      border: 'border-amber-200',
      borderLeft: 'border-l-amber-500',
      bg: 'bg-amber-50/40 hover:bg-amber-50/80',
      text: 'text-amber-800',
      badge: 'bg-amber-100 text-amber-800',
      avatar: 'from-amber-500 to-yellow-400 text-white',
      accentColor: 'text-amber-500'
    };
  }
  if (d.includes('eng') || d.includes('tech')) {
    return {
      border: 'border-violet-200',
      borderLeft: 'border-l-violet-500',
      bg: 'bg-violet-50/40 hover:bg-violet-50/80',
      text: 'text-violet-800',
      badge: 'bg-violet-100 text-violet-800',
      avatar: 'from-violet-600 to-indigo-500 text-white',
      accentColor: 'text-violet-500'
    };
  }
  if (d.includes('mark') || d.includes('growth')) {
    return {
      border: 'border-orange-200',
      borderLeft: 'border-l-orange-500',
      bg: 'bg-orange-50/40 hover:bg-orange-50/80',
      text: 'text-orange-800',
      badge: 'bg-orange-100 text-orange-800',
      avatar: 'from-orange-500 to-amber-500 text-white',
      accentColor: 'text-orange-500'
    };
  }
  if (d.includes('sales') || d.includes('success')) {
    return {
      border: 'border-sky-200',
      borderLeft: 'border-l-sky-500',
      bg: 'bg-sky-50/40 hover:bg-sky-50/80',
      text: 'text-sky-800',
      badge: 'bg-sky-100 text-sky-800',
      avatar: 'from-sky-600 to-blue-500 text-white',
      accentColor: 'text-sky-500'
    };
  }
  if (d.includes('product') || d.includes('design')) {
    return {
      border: 'border-rose-200',
      borderLeft: 'border-l-rose-500',
      bg: 'bg-rose-50/40 hover:bg-rose-50/80',
      text: 'text-rose-800',
      badge: 'bg-rose-100 text-rose-800',
      avatar: 'from-rose-500 to-pink-500 text-white',
      accentColor: 'text-rose-500'
    };
  }
  return {
    border: 'border-emerald-200',
    borderLeft: 'border-l-emerald-500',
    bg: 'bg-emerald-50/40 hover:bg-emerald-50/80',
    text: 'text-emerald-800',
    badge: 'bg-emerald-100 text-emerald-800',
    avatar: 'from-emerald-600 to-teal-500 text-white',
    accentColor: 'text-emerald-500'
  };
};

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
};

export default function InteractiveOrgChart() {
  const [employees, setEmployees] = useState<Employee[]>(INITIAL_EMPLOYEES);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isPlanningMode, setIsPlanningMode] = useState(false);
  const [collapsedNodes, setCollapsedNodes] = useState<Set<string>>(new Set());
  const [highlightedNodeId, setHighlightedNodeId] = useState<string | null>(null);

  // Zoom and Pan State
  const [zoom, setZoom] = useState(0.85);
  const [panX, setPanX] = useState(50);
  const [panY, setPanY] = useState(40);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [clickStart, setClickStart] = useState({ x: 0, y: 0 });

  // Sidebar Actions
  const [sidebarAction, setSidebarAction] = useState<'view' | 'edit' | 'add' | 'move'>('view');
  
  // Forms State
  const [editForm, setEditForm] = useState<Partial<Employee>>({});
  const [addForm, setAddForm] = useState<Partial<Employee>>({
    name: "",
    title: "",
    department: "Engineering",
    status: "active",
    email: "",
    phone: "",
    salary: 80000,
    location: "Mumbai HQ",
    hireDate: new Date().toISOString().split('T')[0]
  });
  const [newManagerId, setNewManagerId] = useState<string>("");

  const canvasRef = useRef<HTMLDivElement>(null);

  // Focus a node and center view on it
  const focusNode = (nodeId: string) => {
    const parentsToExpand: string[] = [];
    let current = employees.find(e => e.id === nodeId);
    while (current && current.managerId) {
      const managerId = current.managerId;
      parentsToExpand.push(managerId);
      current = employees.find(e => e.id === managerId);
    }
    
    if (parentsToExpand.length > 0) {
      setCollapsedNodes(prev => {
        const next = new Set(prev);
        parentsToExpand.forEach(pId => next.delete(pId));
        return next;
      });
    }

    setHighlightedNodeId(nodeId);
    setTimeout(() => setHighlightedNodeId(null), 3000);

    setZoom(1.0);
    setPanX(100);
    setPanY(50);
  };

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    const target = e.target as HTMLElement;
    if (target.closest('.interactive-control')) return;

    setIsDragging(true);
    setDragStart({ x: e.clientX - panX, y: e.clientY - panY });
    setClickStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPanX(e.clientX - dragStart.x);
    setPanY(e.clientY - dragStart.y);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('.interactive-control')) return;
    
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({ x: e.touches[0].clientX - panX, y: e.touches[0].clientY - panY });
      setClickStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    setPanX(e.touches[0].clientX - dragStart.x);
    setPanY(e.touches[0].clientY - dragStart.y);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    const zoomFactor = 0.05;
    const newZoom = e.deltaY < 0 
      ? Math.min(2.0, zoom + zoomFactor) 
      : Math.max(0.4, zoom - zoomFactor);
    setZoom(newZoom);
  };

  // Zoom controls
  const handleZoomIn = () => setZoom(z => Math.min(2.0, z + 0.15));
  const handleZoomOut = () => setZoom(z => Math.max(0.4, z - 0.15));
  const handleZoomReset = () => {
    setZoom(0.85);
    setPanX(50);
    setPanY(40);
  };

  // Card click handler
  const handleCardClick = (e: React.MouseEvent, employeeId: string) => {
    const distance = Math.sqrt(
      Math.pow(e.clientX - clickStart.x, 2) + Math.pow(e.clientY - clickStart.y, 2)
    );
    if (distance < 5) {
      setSelectedId(employeeId);
      setSidebarAction('view');
      const emp = employees.find(x => x.id === employeeId);
      if (emp) {
        setEditForm(emp);
      }
    }
  };

  const isDescendant = (childId: string, parentId: string): boolean => {
    let current = employees.find(e => e.id === childId);
    while (current && current.managerId) {
      const managerId = current.managerId;
      if (managerId === parentId) return true;
      current = employees.find(e => e.id === managerId);
    }
    return false;
  };

  // Node CRUD handlers
  const handleAddEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    if (!addForm.name || !addForm.title || !selectedId) return;

    const newEmp: Employee = {
      id: Date.now().toString(),
      name: addForm.name,
      title: addForm.title,
      department: addForm.department || "Engineering",
      managerId: selectedId,
      status: (addForm.status as Employee['status']) || "active",
      email: addForm.email || `${addForm.name.toLowerCase().replace(/\s+/g, '.')}@hrniti.com`,
      phone: addForm.phone || "+91 98765 00000",
      salary: Number(addForm.salary) || 80000,
      location: addForm.location || "Mumbai HQ",
      hireDate: addForm.hireDate || new Date().toISOString().split('T')[0]
    };

    setEmployees(prev => [...prev, newEmp]);
    setAddForm({
      name: "",
      title: "",
      department: "Engineering",
      status: "active",
      email: "",
      phone: "",
      salary: 80000,
      location: "Mumbai HQ",
      hireDate: new Date().toISOString().split('T')[0]
    });
    setSidebarAction('view');
    setSelectedId(newEmp.id);
  };

  const handleEditEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editForm.id || !editForm.name || !editForm.title) return;

    setEmployees(prev => prev.map(emp => emp.id === editForm.id ? (editForm as Employee) : emp));
    setSidebarAction('view');
  };

  const handleMoveEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedId || !newManagerId) return;

    if (newManagerId === selectedId) {
      alert("An employee cannot report to themselves.");
      return;
    }
    if (isDescendant(newManagerId, selectedId)) {
      alert("Circular reporting detected! A manager cannot report to their own direct report.");
      return;
    }

    setEmployees(prev => prev.map(emp => emp.id === selectedId ? { ...emp, managerId: newManagerId } : emp));
    setSidebarAction('view');
    setNewManagerId("");
  };

  const handleDeleteEmployee = (employeeId: string) => {
    const emp = employees.find(e => e.id === employeeId);
    if (!emp) return;
    if (emp.managerId === null) {
      alert("The CEO / root node cannot be deleted to ensure org integrity.");
      return;
    }

    if (confirm(`Are you sure you want to remove ${emp.name}? Any direct reports will be re-assigned to their manager, ${employees.find(x => x.id === emp.managerId)?.name}.`)) {
      setEmployees(prev => {
        const updated = prev.map(e => {
          if (e.managerId === employeeId) {
            return { ...e, managerId: emp.managerId };
          }
          return e;
        });
        return updated.filter(e => e.id !== employeeId);
      });
      setSelectedId(null);
      setSidebarAction('view');
    }
  };

  // Build Hierarchy Tree
  const buildTree = (list: Employee[]): EmployeeTreeNode | null => {
    const map: { [key: string]: EmployeeTreeNode } = {};
    let root: EmployeeTreeNode | null = null;

    list.forEach(emp => {
      map[emp.id] = { ...emp, children: [] };
    });

    list.forEach(emp => {
      if (emp.managerId === null) {
        root = map[emp.id];
      } else if (map[emp.managerId]) {
        map[emp.managerId].children.push(map[emp.id]);
      }
    });

    return root;
  };

  const orgTree = buildTree(employees);

  // Statistics Computations
  const totalHeadcount = employees.length;
  const openVacancies = employees.filter(e => e.status === 'hiring').length;
  const activeCount = employees.filter(e => e.status !== 'hiring' && e.status !== 'leave').length;
  
  const totalMonthlyPayroll = employees
    .filter(e => e.status !== 'hiring')
    .reduce((sum, e) => sum + e.salary, 0);

  const managerIds = new Set(employees.map(e => e.managerId).filter(Boolean));
  const avgSpan = managerIds.size > 0 ? ((employees.length - 1) / managerIds.size).toFixed(1) : "0";

  // Search filter list
  const filteredEmployees = searchQuery.trim() === "" 
    ? [] 
    : employees.filter(e => 
        e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.department.toLowerCase().includes(searchQuery.toLowerCase())
      );

  // Collapsible toggle helper
  const handleToggleCollapse = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setCollapsedNodes(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Recursive Tree Node Renderer
  const renderTreeNode = (node: EmployeeTreeNode) => {
    if (!node) return null;
    const hasChildren = node.children && node.children.length > 0;
    const isCollapsed = collapsedNodes.has(node.id);
    const theme = getDeptTheme(node.department);
    const isSelected = selectedId === node.id;
    const isHighlighted = highlightedNodeId === node.id;

    const statusColors = {
      active: 'bg-emerald-500',
      remote: 'bg-blue-500',
      meeting: 'bg-amber-500',
      leave: 'bg-rose-500',
      hiring: 'bg-purple-500'
    };

    return (
      <div className="flex flex-col items-center select-none" key={node.id}>
        {/* Node Card Container */}
        <div 
          onClick={(e) => handleCardClick(e, node.id)}
          className={`w-64 bg-white rounded-xl shadow-sm border ${
            isHighlighted ? 'border-amber-400 ring-4 ring-amber-100 scale-105' :
            isSelected ? 'border-emerald-500 ring-4 ring-emerald-50/80' : 
            theme.border
          } ${theme.borderLeft} border-l-[6px] p-4.5 cursor-pointer relative hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}
        >
          {node.status === 'hiring' && (
            <div className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-700 border border-purple-200">
              Open Position
            </div>
          )}

          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-lg bg-gradient-to-tr ${theme.avatar} flex items-center justify-center font-bold text-sm shadow-inner shrink-0`}>
              {node.status === 'hiring' ? <Sparkles className="w-5 h-5" /> : getInitials(node.name)}
            </div>

            <div className="overflow-hidden min-w-0 flex-1">
              <h4 className="text-sm font-black text-slate-800 truncate leading-tight">
                {node.name}
              </h4>
              <p className="text-xs font-semibold text-slate-500 truncate mt-0.5">
                {node.title}
              </p>
              
              <div className="flex items-center gap-2 mt-2">
                <span className={`text-[10px] font-black px-2 py-0.5 rounded ${theme.badge}`}>
                  {node.department}
                </span>
                
                <span className="flex items-center gap-1.5 ml-auto">
                  <span className={`w-2.5 h-2.5 rounded-full ${statusColors[node.status as keyof typeof statusColors] || 'bg-slate-400'}`} />
                  <span className="text-[10px] font-bold text-slate-400 capitalize">
                    {node.status === 'hiring' ? 'hiring' : node.status}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {isPlanningMode && (
            <div className="absolute bottom-2.5 right-3 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
              <span className="text-[9px] font-black text-emerald-600 uppercase tracking-wider">Plan mode</span>
            </div>
          )}
        </div>

        {hasChildren && (
          <div className="flex flex-col items-center">
            <div className="w-px h-6 bg-slate-300 relative">
              <button 
                onClick={(e) => handleToggleCollapse(e, node.id)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-slate-950 hover:border-slate-400 transition-all duration-200 focus:outline-none interactive-control cursor-pointer z-10"
              >
                {isCollapsed ? (
                  <Plus className="w-3 h-3 stroke-[3]" />
                ) : (
                  <span className="w-1.5 h-0.5 bg-slate-500 rounded-full"></span>
                )}
              </button>
            </div>

            {!isCollapsed && (
              <div className="flex gap-x-10 justify-center relative pt-2">
                {node.children.map((child: EmployeeTreeNode, index: number) => {
                  const isFirst = index === 0;
                  const isLast = index === node.children.length - 1;
                  return (
                    <div key={child.id} className="relative flex flex-col items-center">
                      {node.children.length > 1 && (
                        <div 
                          className={`absolute top-0 h-px bg-slate-300 ${
                            isFirst ? "left-1/2 right-0" : isLast ? "left-0 right-1/2" : "left-0 right-0"
                          }`}
                        />
                      )}
                      
                      <div className="w-px h-6 bg-slate-300"></div>
                      
                      {renderTreeNode(child)}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const selectedEmployee = employees.find(e => e.id === selectedId);

  return (
    <div className="w-full bg-slate-50 rounded-3xl border border-slate-200/60 shadow-xl overflow-hidden relative" style={{ height: "700px" }}>
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none opacity-80" />

      {/* Top Header Dashboard Bar */}
      <div className="absolute top-0 inset-x-0 bg-white/85 backdrop-blur-md border-b border-slate-200/50 p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 z-20">
        
        {/* Left Side: Stats */}
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-50 rounded-xl">
              <Users className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Headcount</div>
              <div className="text-sm font-black text-slate-800 flex items-baseline gap-1.5">
                {totalHeadcount} <span className="text-[10px] font-bold text-slate-400">({activeCount} active)</span>
              </div>
            </div>
          </div>

          <div className="h-8 w-px bg-slate-200 hidden sm:block" />

          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-50 rounded-xl">
              <Sparkles className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Open Roles</div>
              <div className="text-sm font-black text-slate-800">{openVacancies} vacant</div>
            </div>
          </div>

          <div className="h-8 w-px bg-slate-200 hidden sm:block" />

          <div className="flex items-center gap-3">
            <div className="p-2 bg-sky-50 rounded-xl">
              <DollarSign className="w-5 h-5 text-sky-600" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Monthly Budget</div>
              <div className="text-sm font-black text-slate-800">
                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(totalMonthlyPayroll)}
              </div>
            </div>
          </div>

          <div className="h-8 w-px bg-slate-200 hidden sm:block" />

          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-50 rounded-xl">
              <Layout className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Avg Span</div>
              <div className="text-sm font-black text-slate-800">{avgSpan} reports</div>
            </div>
          </div>
        </div>

        {/* Right Side: Planning Toggle & Search */}
        <div className="flex items-center gap-3 self-end md:self-auto">
          {/* Search Box */}
          <div className="relative w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search by name, role, dept..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-100 hover:bg-slate-200/70 focus:bg-white text-xs font-semibold text-slate-700 pl-9 pr-8 py-2.5 rounded-xl border border-transparent focus:border-slate-200 focus:outline-none transition-all"
            />
            {searchQuery !== "" && (
              <button 
                onClick={() => setSearchQuery("")}
                className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 absolute right-2 top-1/2 -translate-y-1/2 hover:bg-slate-300 focus:outline-none cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            )}

            {searchQuery !== "" && filteredEmployees.length > 0 && (
              <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-30">
                <div className="text-[10px] font-black text-slate-400 px-4 py-2 bg-slate-50 border-b border-slate-100">
                  Search Results ({filteredEmployees.length})
                </div>
                <div className="max-h-60 overflow-y-auto">
                  {filteredEmployees.map(emp => (
                    <button 
                      key={emp.id}
                      onClick={() => {
                        focusNode(emp.id);
                        setSelectedId(emp.id);
                        setSidebarAction('view');
                        setSearchQuery("");
                      }}
                      className="w-full text-left px-4 py-2.5 hover:bg-slate-50 flex items-center gap-3 border-b border-slate-100 last:border-0 transition-colors cursor-pointer"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${getDeptTheme(emp.department).avatar} flex items-center justify-center font-bold text-xs`}>
                        {emp.status === 'hiring' ? <Sparkles className="w-4 h-4" /> : getInitials(emp.name)}
                      </div>
                      <div className="overflow-hidden min-w-0">
                        <div className="text-xs font-black text-slate-800 truncate">{emp.name}</div>
                        <div className="text-[10px] font-bold text-slate-400 truncate">{emp.title}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Planning Mode Switcher */}
          <button 
            onClick={() => {
              setIsPlanningMode(!isPlanningMode);
              if (!isPlanningMode) {
                if (selectedId) {
                  focusNode(selectedId);
                }
              }
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all shadow-sm interactive-control cursor-pointer border ${
              isPlanningMode 
                ? "bg-slate-900 text-white border-slate-900 hover:bg-slate-800" 
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            }`}
          >
            <Edit2 className="w-3.5 h-3.5" />
            {isPlanningMode ? "Exit Planning" : "Workforce Planner"}
          </button>
        </div>
      </div>

      {/* Floating Instructions */}
      <div className="absolute top-20 left-4 bg-white/85 backdrop-blur-md border border-slate-100 rounded-xl px-3.5 py-2.5 text-[11px] font-bold text-slate-500 z-10 flex items-center gap-2 shadow-sm pointer-events-none select-none">
        <HelpCircle className="w-4 h-4 text-emerald-600 animate-pulse" />
        <span>Drag canvas to Pan · Scroll to Zoom · Click cards to edit & plan</span>
      </div>

      {/* Canvas Area (Click and drag to pan) */}
      <div 
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
        className={`w-full h-full overflow-hidden flex items-start justify-center pt-36 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {/* Transforming Org Chart Box */}
        <div 
          style={{
            transform: `translate(${panX}px, ${panY}px) scale(${zoom})`,
            transformOrigin: "center top",
            transition: isDragging ? "none" : "transform 0.15s ease-out"
          }}
          className="origin-top"
        >
          {orgTree && renderTreeNode(orgTree)}
        </div>
      </div>

      {/* Floating Zoom / Reset Controls */}
      <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur border border-slate-200/60 rounded-xl p-1.5 flex flex-col gap-1 z-20 shadow-lg interactive-control">
        <button 
          onClick={handleZoomIn} 
          title="Zoom In"
          className="w-9 h-9 flex items-center justify-center text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <ZoomIn className="w-5 h-5" />
        </button>
        <button 
          onClick={handleZoomOut} 
          title="Zoom Out"
          className="w-9 h-9 flex items-center justify-center text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <ZoomOut className="w-5 h-5" />
        </button>
        <div className="h-px bg-slate-200 mx-1" />
        <button 
          onClick={handleZoomReset} 
          title="Fit view / Reset"
          className="w-9 h-9 flex items-center justify-center text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>

      {/* Side Slide-in Panel (Detail & Planning Actions) */}
      <div 
        className={`absolute top-0 right-0 bottom-0 w-[420px] bg-white/95 backdrop-blur-md border-l border-slate-200/50 shadow-2xl flex flex-col transition-transform duration-300 ease-out z-40 transform ${
          selectedId ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {selectedEmployee && (
          <>
            {/* Sidebar Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-3">
                <span className="p-2 bg-emerald-50 rounded-xl text-emerald-700">
                  <User className="w-5 h-5" />
                </span>
                <h3 className="text-base font-black text-slate-800">
                  {sidebarAction === 'view' && "Employee Details"}
                  {sidebarAction === 'edit' && "Edit Employee Info"}
                  {sidebarAction === 'add' && "Add Direct Report"}
                  {sidebarAction === 'move' && "Reassign Manager"}
                </h3>
              </div>
              <button 
                onClick={() => {
                  setSelectedId(null);
                  setSidebarAction('view');
                }}
                className="w-8 h-8 rounded-full bg-slate-200/60 flex items-center justify-center text-slate-600 hover:bg-slate-200 hover:text-slate-950 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Sidebar Core Scroll Body */}
            <div className="flex-1 overflow-y-auto p-6">
              
              {/* VIEW ACTION CONTAINER */}
              {sidebarAction === 'view' && (
                <div className="space-y-6">
                  {/* Hero stats header */}
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${getDeptTheme(selectedEmployee.department).avatar} flex items-center justify-center font-bold text-xl shadow`}>
                      {selectedEmployee.status === 'hiring' ? <Sparkles className="w-7 h-7" /> : getInitials(selectedEmployee.name)}
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-slate-800 leading-tight">
                        {selectedEmployee.name}
                      </h2>
                      <p className="text-sm font-semibold text-slate-500 mt-0.5">
                        {selectedEmployee.title}
                      </p>
                      <div className="flex gap-2 mt-2">
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded ${getDeptTheme(selectedEmployee.department).badge}`}>
                          {selectedEmployee.department}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-450" />
                          {selectedEmployee.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  {/* Profile info cards */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider">Contact & Profile</h4>
                    
                    <div className="grid grid-cols-1 gap-3 text-xs font-semibold text-slate-600">
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                        <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                        <span className="truncate">{selectedEmployee.email}</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                        <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{selectedEmployee.phone}</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                        <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>Joined: {new Date(selectedEmployee.hireDate).toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'})}</span>
                      </div>
                    </div>
                  </div>

                  {/* Compensation & Budget stats */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider">Finance & Compensation</h4>
                      <span className="text-[9px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 border border-amber-100 rounded uppercase">HR View only</span>
                    </div>

                    <div className="p-4 bg-emerald-50/50 border border-emerald-100 rounded-2xl flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Monthly CTC</div>
                        <div className="text-lg font-black text-emerald-955 mt-0.5">
                          {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(selectedEmployee.salary)}
                        </div>
                      </div>
                      <div className="p-3 bg-emerald-100 rounded-xl">
                        <DollarSign className="w-5 h-5 text-emerald-700" />
                      </div>
                    </div>
                  </div>

                  {/* Report structure connections */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider">Reporting Hierarchy</h4>
                    
                    {/* Manager Card */}
                    {selectedEmployee.managerId && (
                      <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between">
                        <div>
                          <div className="text-[9px] font-bold text-slate-400 uppercase">Reports To (Manager)</div>
                          <div className="text-xs font-black text-slate-700 mt-0.5">
                            {employees.find(e => e.id === selectedEmployee.managerId)?.name}
                          </div>
                        </div>
                        <button 
                          onClick={() => {
                            if (selectedEmployee.managerId) {
                              focusNode(selectedEmployee.managerId);
                              setSelectedId(selectedEmployee.managerId);
                            }
                          }}
                          className="text-[11px] font-black text-emerald-600 hover:text-emerald-700 flex items-center gap-1 cursor-pointer"
                        >
                          Focus <ArrowRightLeft className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}

                    {/* Direct reports count summary */}
                    <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between">
                      <div>
                        <div className="text-[9px] font-bold text-slate-400 uppercase">Direct Reports</div>
                        <div className="text-xs font-black text-slate-700 mt-0.5">
                          {employees.filter(e => e.managerId === selectedEmployee.id).length} employees report directly
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Planning buttons */}
                  {isPlanningMode && (
                    <div className="space-y-3 pt-6 border-t border-slate-100">
                      <h4 className="text-xs font-black text-slate-800">Planning Actions</h4>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <button 
                          onClick={() => setSidebarAction('add')}
                          className="flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs shadow-sm transition-colors cursor-pointer"
                        >
                          <Plus className="w-4 h-4 stroke-[2.5]" />
                          Add Report
                        </button>

                        <button 
                          onClick={() => setSidebarAction('edit')}
                          className="flex items-center justify-center gap-2 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs transition-colors cursor-pointer"
                        >
                          <Edit2 className="w-4 h-4" />
                          Edit Profile
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <button 
                          onClick={() => {
                            setSidebarAction('move');
                            setNewManagerId(selectedEmployee.managerId || "");
                          }}
                          className="flex items-center justify-center gap-2 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs transition-colors cursor-pointer"
                        >
                          <ArrowRightLeft className="w-4 h-4" />
                          Move Employee
                        </button>

                        {selectedEmployee.managerId !== null && (
                          <button 
                            onClick={() => handleDeleteEmployee(selectedEmployee.id)}
                            className="flex items-center justify-center gap-2 py-3 bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-150 rounded-xl font-bold text-xs transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                            Delete Employee
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* EDIT FORM CONTAINER */}
              {sidebarAction === 'edit' && (
                <form onSubmit={handleEditEmployee} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-slate-500 uppercase">Full Name</label>
                    <input 
                      type="text" 
                      value={editForm.name || ""} 
                      onChange={(e) => setEditForm(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:border-emerald-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-slate-500 uppercase">Job Title</label>
                    <input 
                      type="text" 
                      value={editForm.title || ""} 
                      onChange={(e) => setEditForm(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:border-emerald-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-slate-500 uppercase">Department</label>
                      <select 
                        value={editForm.department || "Engineering"} 
                        onChange={(e) => setEditForm(prev => ({ ...prev, department: e.target.value }))}
                        className="w-full border border-slate-200 bg-white rounded-xl px-3 py-2.5 text-xs font-semibold focus:outline-none cursor-pointer"
                      >
                        <option value="Executive">Executive</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Product">Product</option>
                        <option value="Design">Design</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Finance">Finance</option>
                        <option value="Sales">Sales</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-slate-500 uppercase">Status</label>
                      <select 
                        value={editForm.status || "active"} 
                        onChange={(e) => setEditForm(prev => ({ ...prev, status: e.target.value as Employee['status'] }))}
                        className="w-full border border-slate-200 bg-white rounded-xl px-3 py-2.5 text-xs font-semibold focus:outline-none cursor-pointer"
                      >
                        <option value="active">Active</option>
                        <option value="remote">Remote</option>
                        <option value="meeting">In Meeting</option>
                        <option value="leave">On Leave</option>
                        <option value="hiring">Vacancy (Hiring)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-slate-500 uppercase">Salary (CTC - INR)</label>
                      <input 
                        type="number" 
                        value={editForm.salary || 0} 
                        onChange={(e) => setEditForm(prev => ({ ...prev, salary: Number(e.target.value) }))}
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:border-emerald-500 focus:outline-none"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-slate-500 uppercase">Location</label>
                      <input 
                        type="text" 
                        value={editForm.location || ""} 
                        onChange={(e) => setEditForm(prev => ({ ...prev, location: e.target.value }))}
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-slate-500 uppercase">Email Address</label>
                    <input 
                      type="email" 
                      value={editForm.email || ""} 
                      onChange={(e) => setEditForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-slate-500 uppercase">Phone Number</label>
                    <input 
                      type="text" 
                      value={editForm.phone || ""} 
                      onChange={(e) => setEditForm(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button 
                      type="submit"
                      className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs shadow-sm transition-colors cursor-pointer"
                    >
                      Save Changes
                    </button>
                    <button 
                      type="button"
                      onClick={() => setSidebarAction('view')}
                      className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {/* ADD FORM CONTAINER */}
              {sidebarAction === 'add' && (
                <form onSubmit={handleAddEmployee} className="space-y-5">
                  <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl mb-4 text-[11px] font-bold text-emerald-800">
                    Adding a direct report under <span className="underline">{selectedEmployee.name}</span> ({selectedEmployee.title}).
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-slate-500 uppercase">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Vikramaditya Shah"
                      value={addForm.name || ""} 
                      onChange={(e) => setAddForm(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:border-emerald-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-slate-500 uppercase">Job Title</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Senior Frontend Developer"
                      value={addForm.title || ""} 
                      onChange={(e) => setAddForm(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:border-emerald-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-slate-500 uppercase">Department</label>
                      <select 
                        value={addForm.department || "Engineering"} 
                        onChange={(e) => setAddForm(prev => ({ ...prev, department: e.target.value }))}
                        className="w-full border border-slate-200 bg-white rounded-xl px-3 py-2.5 text-xs font-semibold focus:outline-none cursor-pointer"
                      >
                        <option value="Executive">Executive</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Product">Product</option>
                        <option value="Design">Design</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Finance">Finance</option>
                        <option value="Sales">Sales</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-slate-500 uppercase">Status</label>
                      <select 
                        value={addForm.status || "active"} 
                        onChange={(e) => setAddForm(prev => ({ ...prev, status: e.target.value as Employee['status'] }))}
                        className="w-full border border-slate-200 bg-white rounded-xl px-3 py-2.5 text-xs font-semibold focus:outline-none cursor-pointer"
                      >
                        <option value="active">Active</option>
                        <option value="remote">Remote</option>
                        <option value="meeting">In Meeting</option>
                        <option value="leave">On Leave</option>
                        <option value="hiring">Vacancy (Hiring)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-slate-500 uppercase">Salary (CTC - INR)</label>
                      <input 
                        type="number" 
                        value={addForm.salary || 80000} 
                        onChange={(e) => setAddForm(prev => ({ ...prev, salary: Number(e.target.value) }))}
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:border-emerald-500 focus:outline-none"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-slate-500 uppercase">Location</label>
                      <input 
                        type="text" 
                        value={addForm.location || "Mumbai HQ"} 
                        onChange={(e) => setAddForm(prev => ({ ...prev, location: e.target.value }))}
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-slate-500 uppercase">Email Address (Optional)</label>
                    <input 
                      type="email" 
                      value={addForm.email || ""} 
                      onChange={(e) => setAddForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button 
                      type="submit"
                      className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs shadow-sm transition-colors cursor-pointer"
                    >
                      Add Direct Report
                    </button>
                    <button 
                      type="button"
                      onClick={() => setSidebarAction('view')}
                      className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {/* MOVE / RE-PARENT FORM CONTAINER */}
              {sidebarAction === 'move' && (
                <form onSubmit={handleMoveEmployee} className="space-y-5">
                  <div className="p-3.5 bg-sky-50 border border-sky-100 rounded-xl text-[11px] font-bold text-sky-800">
                    Re-parent <span className="underline">{selectedEmployee.name}</span>. Moving this node will also move all their direct reports together to preserve the reporting branch structure.
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase">Select New Manager / Reports To</label>
                    <select 
                      value={newManagerId} 
                      onChange={(e) => setNewManagerId(e.target.value)}
                      className="w-full border border-slate-200 bg-white rounded-xl px-3 py-3 text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
                      required
                    >
                      <option value="" disabled>-- Select Manager --</option>
                      {employees
                        .filter(e => selectedId !== null && e.id !== selectedId && !isDescendant(e.id, selectedId))
                        .map(mgr => (
                          <option key={mgr.id} value={mgr.id}>
                            {mgr.name} ({mgr.title} - {mgr.department})
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button 
                      type="submit"
                      className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs shadow-sm transition-colors cursor-pointer"
                    >
                      Confirm Move
                    </button>
                    <button 
                      type="button"
                      onClick={() => setSidebarAction('view')}
                      className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}

            </div>
          </>
        )}
      </div>
    </div>
  );
}

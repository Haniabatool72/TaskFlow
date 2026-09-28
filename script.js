const $ = id => document.getElementById(id);
let tasks = load();
let filter = "all";

function load() {
  try { return JSON.parse(localStorage.getItem("taskflow-tasks")) || []; } catch { return []; }
}
function save() {
  try { localStorage.setItem("taskflow-tasks", JSON.stringify(tasks)); } catch {}
}

function addTask() {
  const text = $("input").value.trim();
  if (!text) { $("error").textContent = "Please type a task first."; return; }
  $("error").textContent = "";
  tasks.unshift({ id: Date.now(), text, priority: $("priority").value, done: false });
  $("input").value = "";
  save(); render();
}

function render() {
  const shown = tasks.filter(t => filter === "all" || (filter === "done" ? t.done : !t.done));
  $("list").innerHTML = "";
  shown.forEach(t => {
    const li = document.createElement("li");
    li.className = `task ${t.priority}${t.done ? " done" : ""}`;

    const box = document.createElement("input");
    box.type = "checkbox";
    box.checked = t.done;
    box.setAttribute("aria-label", "Mark as done");
    box.onchange = () => { t.done = box.checked; save(); render(); };

    const label = document.createElement("span");
    label.textContent = t.text;   // textContent keeps user input safe

    const del = document.createElement("button");
    del.className = "del";
    del.textContent = "✕";
    del.setAttribute("aria-label", "Delete task");
    del.onclick = () => { tasks = tasks.filter(x => x.id !== t.id); save(); render(); };

    li.append(box, label, del);
    $("list").appendChild(li);
  });

  $("empty").classList.toggle("hidden", shown.length > 0);
  const left = tasks.filter(t => !t.done).length;
  $("summary").textContent = tasks.length ? `${left} of ${tasks.length} tasks left` : "Nothing planned yet";
  $("clear").classList.toggle("hidden", !tasks.some(t => t.done));
}

$("addBtn").onclick = addTask;
$("input").addEventListener("keydown", e => { if (e.key === "Enter") addTask(); });
$("clear").onclick = () => { tasks = tasks.filter(t => !t.done); save(); render(); };
document.querySelectorAll(".filter").forEach(b => b.onclick = () => {
  filter = b.dataset.filter;
  document.querySelectorAll(".filter").forEach(x => x.classList.toggle("active", x === b));
  render();
});

render();

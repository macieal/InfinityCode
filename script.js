function saveHtml() {
  const content = document.getElementById("code").value;
  const blob = new Blob([content], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "index.html";
  a.click();

  URL.revokeObjectURL(url);
}

function loadHtml() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".html";

  input.onchange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      document.getElementById("code").value = reader.result;
    };

    reader.readAsText(file);
  };

  input.click();
}
function autoRun(){ const code = document.getElementById('code').value; const iframe = document.getElementById('preview').contentWindow; iframe.document.open(); iframe.document.write(code); iframe.document.close(); }
function toggleTheme(){
  const html = document.documentElement;
  if(html.classList.contains('dark')){
    html.classList.remove('dark');
  } else {
    html.classList.add('dark');
  }
  localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
}
(function(){
  const saved = localStorage.getItem('theme');
  if(saved === 'dark' || !saved){ document.documentElement.classList.add('dark'); }
})();
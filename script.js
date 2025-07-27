
const textInput = document.getElementById('input-text');
const fileInput = document.getElementById('fileInput');

document.addEventListener('DOMContentLoaded', function() {
  const inputEl = document.getElementById('input-text');
  const outputEl = document.getElementById('output-text');
  const counts = document.getElementById('counts');
  const outputSection = document.getElementById('output-section');

  function updateCounts() {
    const text = inputEl.value.trim();
    if (!text) {
      counts.textContent = '';
      return;
    }
    const words = text.split(/\s+/).length;
    const chars = text.length;
    const sentences = (text.match(/[.!?]+/g) || []).length;
    const lines = text.split(/\n/).length;
    counts.textContent = `Words: ${words} | Characters: ${chars} | Sentences: ${sentences} | Lines: ${lines}`;
  }
  inputEl.addEventListener('input', updateCounts);

  document.querySelectorAll('.btn-row button').forEach(btn => {
    btn.addEventListener('click', () => {
      let text = inputEl.value;
      if (!text.trim()) return;
      switch (btn.dataset.action) {
        case 'upper': text = text.toUpperCase(); break;
        case 'lower': text = text.toLowerCase(); break;
        case 'capitalize': text = text.replace(/\b\w/g, c => c.toUpperCase()); break;
        case 'title': text = text.replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()); break;
        case 'sentence': text = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase()); break;
        case 'toggle': text = Array.from(text).map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join(''); break;
        case 'alternate': text = Array.from(text).map((c,i)=> i%2===0 ? c.toLowerCase() : c.toUpperCase()).join(''); break;
        case 'camel': {
          let words = text.toLowerCase().split(/[^a-zA-Z0-9]+/).filter(Boolean);
          text = words.map((w,i)=> i===0?w:w.charAt(0).toUpperCase()+w.slice(1)).join('');
          break;
        }
        case 'pascal': {
          let words = text.toLowerCase().split(/[^a-zA-Z0-9]+/).filter(Boolean);
          text = words.map(w=> w.charAt(0).toUpperCase()+w.slice(1)).join('');
          break;
        }
        case 'snake': text = text.trim().toLowerCase().replace(/\W+/g,'_'); break;
        case 'kebab': text = text.trim().toLowerCase().replace(/\W+/g,'-'); break;
        case 'dot': text = text.trim().toLowerCase().replace(/\W+/g,'.'); break;
        case 'space': text = text.trim().replace(/[._-]+/g,' '); break;
      }
      outputEl.value = text;
      outputSection.style.display = 'block';
    });
  });

  document.getElementById('clearBtnIn').addEventListener('click', () => {
    inputEl.value = '';
    counts.textContent = '';
  });

  document.getElementById('copyBtn').addEventListener('click', () => {
    outputEl.select();
    document.execCommand('copy');
  });
  document.getElementById('downloadBtn').addEventListener('click', () => {
    const blob = new Blob([outputEl.value], {type: 'text/plain'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'ToolsMenia-CaseConverted.txt';
    a.click();
  });
  document.getElementById('clearBtn').addEventListener('click', () => {
    outputEl.value = '';
    outputSection.style.display = 'none';
  });
  

// choose file
document.getElementById('chooseFileBtn').addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if(file) {
    const reader = new FileReader();
    reader.onload = e => {
      textInput.value = e.target.result;
      updateCounts();
    };
    reader.readAsText(file);
  }
});

  updateCounts();
});

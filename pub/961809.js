alert('Success. ');
localStorage.solved = localStorage.solved.split('\x1C').concat('FLAG{92b092}').filter((x, i, a) => x.length > 0 && a.indexOf(x) === i).join('\x1C');
window.location.href = './mGebur/';

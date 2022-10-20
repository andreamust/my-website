export function getResumeSet(data, type) {
  let list = [];
  if (data.map((d) => typeof d.type)[0] === 'object' && type === 'type') {
    data.map((d) => list.push(...d.type));
  } else {
    data.map((d) => list.push(d[type]));
  }
  return [...new Set(list)];
}

export function filterResumeData(data, type, value) {
  return data.filter((d) => d[type].toString().includes(value.toString())); // TODO: change toString()
}

export function parseData(data, type, value, targetValue) {
  const filteredResume = filterResumeData(data, type, value);
  return getResumeSet(filteredResume, targetValue);
}

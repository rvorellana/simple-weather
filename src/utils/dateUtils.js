const formatDate = (dateString) => {
  const date = new Date(dateString);

  if (isNaN(date)) {
    console.warn(`Invalid date string: ${dateString}`);
    return dateString;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

const formatTime = (dateString) => {
  const date = new Date(dateString);

  if (isNaN(date)) {
    console.warn(`Invalid date string: ${dateString}`);
    return dateString;
  }

  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(date);
};

export { formatDate, formatTime };

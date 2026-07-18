const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchJobs = async (filters = {}) => {
  const params = new URLSearchParams();
  if (filters.search) params.append("search", filters.search);
  if (filters.type) params.append("type", filters.type);
  if (filters.category) params.append("category", filters.category);

  const res = await fetch(`${BASE_URL}/jobs?${params}`);
  const data = await res.json();
  return data.data;
};

export const fetchJobById = async (id) => {
  const res = await fetch(`${BASE_URL}/jobs/${id}`);
  const data = await res.json();
  return data.data;
};

export const fetchCompanies = async () => {
  const res = await fetch(`${BASE_URL}/companies`);
  const data = await res.json();
  return data.data;
};
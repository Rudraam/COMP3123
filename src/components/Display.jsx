export default function Display({ data }) {
  // Render EXACT label/value format with blank lines using <pre>
  const block = `Email:
${data.email}

Full Name:
${data.fullName}

Address:
${data.address}

City:
${data.city}

Province:
${data.province}

Postal Code:
${data.postalCode}`;

  return <pre className="display-pre">{block}</pre>;
}

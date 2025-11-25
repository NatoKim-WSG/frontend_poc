export type Branch = {
  name: string;
  type: "Main Branch" | "Regional Branch" | "District Office" | "Satellite Office";
  address: string;
  contact: string;
};

export type Region = {
  region: string;
  branches: Branch[];
};

const officeTypeLabels: Record<Branch["type"], string> = {
  "Main Branch": "Main Branch",
  "Regional Branch": "Regional Branch",
  "District Office": "District Office",
  "Satellite Office": "Satellite Office",
};

const badgeColors: Record<Branch["type"], string> = {
  "Main Branch": "bg-blue-100 text-blue-900",
  "Regional Branch": "bg-sky-100 text-sky-800",
  "District Office": "bg-yellow-100 text-yellow-800",
  "Satellite Office": "bg-purple-100 text-purple-800",
};

export const regions: Region[] = [
  {
    region: "Region VI (Western Visayas)",
    branches: [
      {
        name: "NBI Bacolod",
        type: "District Office",
        address: "Aguinaldo Street, Bacolod City",
        contact: "(034) 433-2708",
      },
      {
        name: "NBI Iloilo",
        type: "District Office",
        address: "Fort San Pedro, Iloilo City",
        contact: "(033) 337-8921",
      },
    ],
  },
  {
    region: "Region VII (Central Visayas)",
    branches: [
      {
        name: "NBI Bohol",
        type: "District Office",
        address: "CPG Avenue, Tagbilaran City, Bohol",
        contact: "(038) 501-8456",
      },
      {
        name: "NBI Cebu Regional Office",
        type: "Regional Branch",
        address: "Rex Bldg., N. Escario corner Gorordo Ave., Cebu City",
        contact: "(032) 254-8321",
      },
    ],
  },
  {
    region: "Region XI (Davao Region)",
    branches: [
      {
        name: "NBI Davao City",
        type: "District Office",
        address: "J.P. Laurel Avenue, Davao City",
        contact: "(082) 221-4414",
      },
    ],
  },
  {
    region: "National Capital Region (NCR)",
    branches: [
      {
        name: "NBI Main Office",
        type: "Main Branch",
        address: "Diosdado Macapagal Boulevard, Filinvest Cyberzone Bay City, Pasay",
        contact: "(02) 8525-9406",
      },
      {
        name: "NBI Quezon City",
        type: "Regional Branch",
        address: "NBI Building, Quezon Avenue, Quezon City",
        contact: "(02) 8524-2725",
      },
      {
        name: "NBI SM Manila",
        type: "Satellite Office",
        address: "5th Floor, SM City Manila, Concepcion cor. Arroceros & San Marcelino Sts., Manila",
        contact: "(02) 8526-1573",
      },
    ],
  },
];

export default function RegionList() {
  return (
    <section className="pb-20 bg-[#F4F7FB]">
      <div className="max-w-5xl mx-auto px-4 md:px-6 space-y-10">
        {regions.map((region) => (
          <div key={region.region} className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 flex items-center gap-3 border-b border-gray-100 bg-white">
              <span className="text-red-500 text-xl">
                <i className="fas fa-location-dot"></i>
              </span>
              <h3 className="text-xl font-semibold text-[#003B7A]">{region.region}</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] text-left text-sm text-gray-700">
                <thead className="bg-[#0B2C5A] text-white">
                  <tr>
                    <th className="px-6 py-3 font-semibold whitespace-nowrap">Branch Name</th>
                    <th className="px-6 py-3 font-semibold whitespace-nowrap">Office Type</th>
                    <th className="px-6 py-3 font-semibold whitespace-nowrap">Address</th>
                    <th className="px-6 py-3 font-semibold whitespace-nowrap">Contact Number</th>
                  </tr>
                </thead>
                <tbody>
                  {region.branches.map((branch, index) => (
                    <tr key={branch.name} className="border-b border-gray-100 last:border-b-0">
                      <td className="px-6 py-4 font-semibold text-gray-900 align-top whitespace-nowrap">
                        {branch.name}
                      </td>
                      <td className="px-6 py-4 align-top whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold ${badgeColors[branch.type]}`}
                        >
                          {officeTypeLabels[branch.type]}
                        </span>
                      </td>
                      <td className="px-6 py-4 align-top whitespace-normal break-words">{branch.address}</td>
                      <td className="px-6 py-4 font-medium align-top whitespace-nowrap">
                        {branch.contact}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export const mockStats = {
    totalInvestors: "2.5M+",
    assetsUnderManagement: "$12B+",
    avgReturnRate: "14.5%",
    activeFunds: 120
};

export const mockFunds = [
    {
        id: "f1",
        name: "Growth Plus Equity Fund",
        category: "Equity",
        risk: "High",
        nav: 145.20,
        returns: {
            "1Y": 18.5,
            "3Y": 15.2,
            "5Y": 16.8
        },
        expenseRatio: 0.75,
        fundManager: "Sarah Jenkins",
        holdings: [
            { company: "TechCorp Insights", allocation: 12.5 },
            { company: "Global Finance", allocation: 8.2 },
            { company: "EcoEnergy Systems", allocation: 7.4 }
        ],
        assetAllocation: [
            { name: "Large Cap", value: 60 },
            { name: "Mid Cap", value: 25 },
            { name: "Small Cap", value: 15 }
        ],
        history: [
            { date: '2019', value: 100 },
            { date: '2020', value: 110 },
            { date: '2021', value: 125 },
            { date: '2022', value: 120 },
            { date: '2023', value: 145 }
        ]
    },
    {
        id: "f2",
        name: "Stable Growth Shield",
        category: "Debt",
        risk: "Low",
        nav: 45.80,
        returns: {
            "1Y": 7.2,
            "3Y": 6.8,
            "5Y": 7.1
        },
        expenseRatio: 0.45,
        fundManager: "John Doe",
        holdings: [
            { company: "Govt Bonds", allocation: 40.0 },
            { company: "Corporate Bonds AA", allocation: 35.0 },
            { company: "Cash Liquids", allocation: 25.0 }
        ],
        assetAllocation: [
            { name: "Govt Sec", value: 40 },
            { name: "Corp Bonds", value: 45 },
            { name: "Cash", value: 15 }
        ],
        history: [
            { date: '2019', value: 35 },
            { date: '2020', value: 38 },
            { date: '2021', value: 40 },
            { date: '2022', value: 42 },
            { date: '2023', value: 45.8 }
        ]
    },
    {
        id: "f3",
        name: "Tech Innovation Index",
        category: "Index",
        risk: "Moderate",
        nav: 210.50,
        returns: {
            "1Y": 22.4,
            "3Y": 14.1,
            "5Y": 19.5
        },
        expenseRatio: 0.20,
        fundManager: "Index Tracker Algorithm",
        holdings: [
            { company: "MegaTech", allocation: 20.0 },
            { company: "CloudNet", allocation: 15.0 },
            { company: "AiSystems", allocation: 12.0 }
        ],
        assetAllocation: [
            { name: "Tech Equity", value: 95 },
            { name: "Cash", value: 5 }
        ],
        history: [
            { date: '2019', value: 120 },
            { date: '2020', value: 150 },
            { date: '2021', value: 190 },
            { date: '2022', value: 160 },
            { date: '2023', value: 210.5 }
        ]
    }
];

export const mockUsers = [
    { id: 1, name: "Alice Smith", role: "Investor", status: "Active", joined: "2022-01-15" },
    { id: 2, name: "Bob Johnson", role: "Investor", status: "Inactive", joined: "2021-11-20" },
    { id: 3, name: "Charlie Brown", role: "Advisor", status: "Active", joined: "2020-05-10" },
    { id: 4, name: "Diana Prince", role: "Analyst", status: "Active", joined: "2023-03-01" },
];

export const mockTransactions = [
    { id: "t1", date: "2023-10-25", type: "Buy", fund: "Growth Plus Equity Fund", amount: 5000, status: "Completed" },
    { id: "t2", date: "2023-11-02", type: "SIP", fund: "Tech Innovation Index", amount: 1000, status: "Completed" },
    { id: "t3", date: "2023-11-15", type: "Sell", fund: "Stable Growth Shield", amount: 2000, status: "Pending" }
];

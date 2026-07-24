import { useState } from "react";
import { AppProvider, useApp } from "./store/AppContext";
import { Dashboard } from "./components/Dashboard";
import { Members } from "./components/Members";
import { Expenses } from "./components/Expenses";
import { Events } from "./components/Events";
import { Settings } from "./components/Settings";
import { Reports } from "./components/Reports";
import { CollectPatti } from "./components/CollectPatti";
import { Layout } from "./components/Layout";

export type Tab = "dashboard" | "members" | "collect" | "reports" | "expenses" | "events" | "settings";

function MainApp() {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");
  const { t } = useApp();

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard onNavigate={setActiveTab} />;
      case "members":
        return <Members />;
      case "collect":
        return <CollectPatti />;
      case "reports":
        return <Reports />;
      case "expenses":
        return <Expenses />;
      case "events":
        return <Events />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard onNavigate={setActiveTab} />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}
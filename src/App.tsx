import * as commonStyles from "./assets/styles/common.module.scss";
import * as styles from "./app.module.scss";
import   "./assets/styles/share.style.scss";

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import Header from "./layout/Header";
import Footer from "./layout/Footer";


export default function App() {
    return (
        <Router>
            <div className={styles.wrapper}>
                <Header />
                <main
                    className={[commonStyles.container, styles.content].join(
                        " "
                    )}
                >
                    <AppRoutes />
                </main>
                <Footer />
            </div>
        </Router>
    );
}

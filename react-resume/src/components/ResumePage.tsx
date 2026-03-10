import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ResumePage(): JSX.Element {
    const { t } = useLanguage();

    return (
        <div className="page">
            <table>
                <thead>
                    <tr>
                        <td>
                            <div className="header-stripe">
                                <img src="/header_logo.png" alt="logo" />
                            </div>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="content">
                                <div className="name-title">MICHEL NEGRÃO</div>
                                <div className="horizontal-line"></div>
                                <div className="section-box">{t('ABOUT_ME')}</div>
                                <p>{t('ABOUT_ME_DESC')}</p>
                                
                                <div className="section-box">{t('MAIN_QUALIFICATIONS')}</div>
                                <ul className="skills-list">
                                    <li>Cognite Data Fusion</li>
                                    <li>JavaScript – React / Typescript / NextJS / NestJS / React Native</li>
                                    <li>Python</li>
                                    <li>SQL – Relational / No-SQL</li>
                                    <li>Azure Devops</li>
                                    <li>Docker</li>
                                    <li>Linux</li>
                                </ul>
                                
                                <div className="section-box">{t('PROFESSIONAL_EXPERIENCE')}</div>
                                <div className="company-header">{t('COMPANY_RADIX')}</div>
                                <div className="job-title-row">
                                    {t('JOB_SPEC_1')} <span className="job-date">{t('DATE_FEB_26')}</span>
                                </div>
                                <div className="job-title-row">
                                    {t('JOB_SENIOR')} <span className="job-date">{t('DATE_NOV_23')}</span>
                                </div>
                                
                                <div className="activities-heading">{t('ACTIVITIES_HEADING')}</div>
                                <ul className="activities-list">
                                    <li>{t('ACT_RADIX_1')}</li>
                                    <li>{t('ACT_RADIX_2')}</li>
                                    <li>{t('ACT_RADIX_3')}</li>
                                    <li>{t('ACT_RADIX_4')}</li>
                                    <li>{t('ACT_RADIX_5')}</li>
                                    <li>{t('ACT_RADIX_6')}</li>
                                    <li>{t('ACT_RADIX_7')}</li>
                                </ul>
                                
                                <div className="activities-heading">{t('MAIN_PROJECTS_HEADING')}</div>
                                <ul className="activities-list">
                                    <li>{t('PROJ_1')}</li>
                                    <li>{t('PROJ_2')}</li>
                                    <li>{t('PROJ_3')}</li>
                                </ul>

                                <div className="company-header" style={{ marginTop: '25px' }}>{t('COMPANY_ANP')}</div>
                                <div className="job-title-row">
                                    {t('JOB_RESEARCHER')} <span className="job-date">{t('DATE_JUN_20')}</span>
                                </div>
                                <div className="activities-heading">{t('ACTIVITIES_HEADING')}</div>
                                <ul className="activities-list">
                                    <li>{t('ACT_ANP_1')}</li>
                                    <li>{t('ACT_ANP_2')}</li>
                                    <li>{t('ACT_ANP_3')}</li>
                                </ul>

                                <div className="company-header" style={{ marginTop: '25px' }}>{t('COMPANY_KLABIN')}</div>
                                <div className="job-title-row">
                                    {t('JOB_AUTO')} <span className="job-date">{t('DATE_JUL_18')}</span>
                                </div>
                                <div className="activities-heading">{t('ACTIVITIES_HEADING')}</div>
                                <ul className="activities-list">
                                    <li>{t('ACT_KLA_1')}</li>
                                    <li>{t('ACT_KLA_2')}</li>
                                    <li>{t('ACT_KLA_3')}</li>
                                    <li>{t('ACT_KLA_4')}</li>
                                    <li>{t('ACT_KLA_5')}</li>
                                </ul>

                                <div className="section-box">{t('ACADEMIC_BACKGROUND')}</div>
                                <ul className="skills-list">
                                    <li>{t('EDU_1')}</li>
                                    <li>{t('EDU_2')}</li>
                                    <li>{t('EDU_3')}</li>
                                    <li>{t('EDU_4')}</li>
                                    <li>{t('EDU_5')}</li>
                                </ul>

                                <div className="section-box">{t('CERTIFICATIONS')}</div>
                                <ul className="skills-list">
                                    <li>{t('CERT_1')}</li>
                                    <li>{t('CERT_2')}</li>
                                    <li>{t('CERT_3')}</li>
                                    <li>{t('CERT_4')}</li>
                                    <li>{t('CERT_5')}</li>
                                    <li>{t('CERT_6')}</li>
                                </ul>

                                <div className="section-box">{t('AWARDS_AND_PUBLICATIONS')}</div>
                                <ul className="skills-list">
                                    <li>{t('AWARDS_1')}</li>
                                </ul>

                                <div className="section-box">{t('LANGUAGES')}</div>
                                <ul className="skills-list">
                                    <li>{t('LANG_1')}</li>
                                    <li>{t('LANG_2')}</li>
                                    <li>{t('LANG_3')}</li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            {/* Spacer for print footer */}
                        </td>
                    </tr>
                </tfoot>
            </table>
            <div className="footer-container">
                <img src="/footer_illustration.png" alt="footer" />
            </div>
        </div>
    );
}

import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'
import { OramaPlugin } from "@orama/plugin-vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Documentazione",
  description: "Questo sito contiene tutta la documentazione relativa all'azienda Veryant",
  markdown: {
    languages: ['cobol'] // Assicura che il supporto COBOL sia attivo
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // menù superiore
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentazione', link: '/pages/release-notes/release-notes-2026-R1' },
      // { text: 'Veryant', link: 'https://www.veryant.com/it/' },
      { text: 'Prodotti', link: 'https://www.veryant.com/it/products/' },
      { text: 'Soluzioni', link: 'https://www.veryant.com/it/solutions/' },
      { text: 'Supporto', link: 'https://www.veryant.com/it/support.html' },
      { text: 'Edizioni', link: 'https://www.veryant.com/it/editions.html' },
      { text: 'Azienda', link: 'https://www.veryant.com/it/about.html' }
    ],
    // menù laterale multi-livello
    sidebar: [
      {
        text: 'Documentazione',
        collapsed: false, // Permette di espandere/comprimere
        items: [
          { text: 'Release Notes', link: '/pages/release-notes/release-notes-2026-R1', 
            collapsed: true,
            items: [
              { text: 'isCOBOL 2026 R1', link: '/pages/release-notes/release-notes-2026-R1' },
              { text: 'isCOBOL 2025 R2', link: '/pages/release-notes/release-notes-2025-R2' },
              { text: 'isCOBOL 2025 R1', link: '/pages/release-notes/release-notes-2025-R1' },
              { text: 'isCOBOL 2024 R2', link: '/pages/release-notes/release-notes-2024-R2' },
              { text: 'isCOBOL 2024 R1', link: '/pages/release-notes/release-notes-2024-R1' },
              { text: 'isCOBOL 2023 R2', link: '/pages/release-notes/release-notes-2023-R2' },
              { text: 'isCOBOL 2023 R1', link: '/pages/release-notes/release-notes-2023-R1' },
              { text: 'isCOBOL 2022 R2', link: '/pages/release-notes/release-notes-2022-R2' },
              { text: 'isCOBOL 2022 R1', link: '/pages/release-notes/release-notes-2022-R1' },
              { text: 'isCOBOL 2021 R2', link: '/pages/release-notes/release-notes-2021-R2' },
              { text: 'isCOBOL 2021 R1', link: '/pages/release-notes/release-notes-2021-R1' },
              { text: 'isCOBOL 2020 R2', link: '/pages/release-notes/release-notes-2020-R2' },
              { text: 'isCOBOL 2020 R1', link: '/pages/release-notes/release-notes-2020-R1' },
              { text: 'isCOBOL 2019 R2', link: '/pages/release-notes/release-notes-2019-R2' },
              { text: 'isCOBOL 2019 R1', link: '/pages/release-notes/release-notes-2019-R1' },
              { text: 'isCOBOL 2018 R2', link: '/pages/release-notes/release-notes-2018-R2' },
              { text: 'isCOBOL 2018 R1', link: '/pages/release-notes/release-notes-2018-R1' },
              { text: 'isCOBOL 2017 R2', link: '/pages/release-notes/release-notes-2017-R2' },
              { text: 'isCOBOL 2017 R1', link: '/pages/release-notes/release-notes-2017-R1' },
              { text: 'isCOBOL 2016 R2', link: '/pages/release-notes/release-notes-2016-R2' },
              { text: 'isCOBOL 2016 R1', link: '/pages/release-notes/release-notes-2016-R1' },
              { text: 'isCOBOL 2015 R1', link: '/pages/release-notes/release-notes-2015-R1' } 
            ]},

          { text: 'Release Overview', link: '/pages/release-overview/release-overview',
            collapsed: true,
            items: [
              { text: 'isCOBOL 2026 R1 Overview', link: '/pages/release-overview/release-overview' },
              { text: 'isCOBOL 2025 R2 Overview', link: '/pages/release-overview/release-overview-2025-R2/release-overview-2025-R2',
                collapsed: true, 
                items: [
                  { text: 'Introduction', link: '/pages/release-overview/release-overview-2025-R2/release-overview-2025-R2'},
                  { text: 'GUI enhancements', link: '/pages/release-overview/release-overview-2025-R2/GUI-enhancements'},
                  { text: 'isCOBOL WebClient', link: '/pages/release-overview/release-overview-2025-R2/isCOBOL-WebClient'},
                  { text: 'Compatibility improvements', link: '/pages/release-overview/release-overview-2025-R2/Compatibility-improvements'},
                  { text: 'Runtime enhancements', link: '/pages/release-overview/release-overview-2025-R2/Runtime-enhancements'},
                  { text: 'IsCOBOL Server enhancements', link: '/pages/release-overview/release-overview-2025-R2/isCOBOL-server-enhancements'},
                  { text: 'Debugger enhancements', link: '/pages/release-overview/release-overview-2025-R2/Debugger-enhancements'},
                  { text: 'IsCOBOL IDE enhancements', link: '/pages/release-overview/release-overview-2025-R2/isCOBOL-IDE-enhancements'},
                  { text: 'VSCode extension enhancements', link: '/pages/release-overview/release-overview-2025-R2/VSCode-extension-enhancements'},
                  { text: 'isCOBOL Utilities', link: '/pages/release-overview/release-overview-2025-R2/isCOBOL-utilities'}
                ]},

              { text: 'isCOBOL 2025 R1 Overview', link: '/pages/release-overview/release-overview-2025-R1/release-overview-2025-R1',
                collapsed: true, 
                items: [ { text: 'Introduction', link: '/pages/release-overview/release-overview-2025-R1/release-overview-2025-R1'},  ]},
              { text: 'isCOBOL 2024 R2 Overview', link: '/pages/release-overview/release-overview-2024-R2/release-overview-2024-R2',
                collapsed: true, 
                items: [ { text: 'Introduction', link: '/pages/release-overview/release-overview-2024-R2/release-overview-2024-R2'},  ]},
              { text: 'isCOBOL 2024 R1 Overview', link: '/pages/release-overview/release-overview-2024-R1/release-overview-2024-R1',
                collapsed: true, 
                items: [ { text: 'Introduction', link: '/pages/release-overview/release-overview-2024-R1/release-overview-2024-R1'},  ]},
              { text: 'isCOBOL 2023 R2 Overview', link: '/pages/release-overview/release-overview-2023-R2/release-overview-2023-R2',
                collapsed: true, 
                items: [ { text: 'Introduction', link: '/pages/release-overview/release-overview-2023-R2/release-overview-2023-R2'},  ]},
              { text: 'isCOBOL 2023 R1 Overview', link: '/pages/release-overview/release-overview-2023-R1/release-overview-2023-R1',
                collapsed: true, 
                items: [ { text: 'Introduction', link: '/pages/release-overview/release-overview-2023-R1/release-overview-2023-R1'},  ]},
              { text: 'isCOBOL 2022 R2 Overview', link: '/pages/release-overview/release-overview-2022-R2/release-overview-2022-R2',
                collapsed: true, 
                items: [ { text: 'Introduction', link: '/pages/release-overview/release-overview-2022-R2/release-overview-2022-R2'},  ]},
              { text: 'isCOBOL 2022 R1 Overview', link: '/pages/release-overview/release-overview-2022-R1/release-overview-2022-R1',
                collapsed: true, 
                items: [ { text: 'Introduction', link: '/pages/release-overview/release-overview-2022-R1/release-overview-2022-R1'},  ]},
              { text: 'isCOBOL 2021 R2 Overview', link: '/pages/release-overview/release-overview-2021-R2/release-overview-2021-R2',
                collapsed: true, 
                items: [ { text: 'Introduction', link: '/pages/release-overview/release-overview-2021-R2/release-overview-2021-R2'},  ]},
              { text: 'isCOBOL 2021 R1 Overview', link: '/pages/release-overview/release-overview-2021-R1/release-overview-2021-R1',
                collapsed: true, 
                items: [ { text: 'Introduction', link: '/pages/release-overview/release-overview-2021-R1/release-overview-2021-R1'},  ]},
              { text: 'isCOBOL 2020 R2 Overview', link: '/pages/release-overview/release-overview-2020-R2/release-overview-2020-R2',
                collapsed: true, 
                items: [ { text: 'Introduction', link: '/pages/release-overview/release-overview-2020-R2/release-overview-2020-R2'},  ]},
              { text: 'isCOBOL 2020 R1 Overview', link: '/pages/release-overview/release-overview-2020-R1/release-overview-2020-R1',
                collapsed: true, 
                items: [ { text: 'Introduction', link: '/pages/release-overview/release-overview-2020-R1/release-overview-2020-R1'},  ]},
              { text: 'isCOBOL 2019 R2 Overview', link: '/pages/release-overview/release-overview-2019-R2/release-overview-2019-R2',
                collapsed: true, 
                items: [ { text: 'Introduction', link: '/pages/release-overview/release-overview-2019-R2/release-overview-2019-R2'},  ]},
              { text: 'isCOBOL 2019 R1 Overview', link: '/pages/release-overview/release-overview-2019-R1/release-overview-2019-R1',
                collapsed: true, 
                items: [ { text: 'Introduction', link: '/pages/release-overview/release-overview-2019-R1/release-overview-2019-R1'},  ]},
              { text: 'isCOBOL 2018 R2 Overview', link: '/pages/release-overview/release-overview-2018-R2/release-overview-2018-R2',
                collapsed: true, 
                items: [ { text: 'Introduction', link: '/pages/release-overview/release-overview-2018-R2/release-overview-2018-R2'},  ]},
              { text: 'isCOBOL 2018 R1 Overview', link: '/pages/release-overview/release-overview-2018-R1/release-overview-2018-R1',
                collapsed: true, 
                items: [ { text: 'Introduction', link: '/pages/release-overview/release-overview-2018-R1/release-overview-2018-R1'},  ]},
              { text: 'isCOBOL 2017 R2 Overview', link: '/pages/release-overview/release-overview-2017-R2/release-overview-2017-R2',
                collapsed: true, 
                items: [ { text: 'Introduction', link: '/pages/release-overview/release-overview-2017-R2/release-overview-2017-R2'},  ]},
              { text: 'isCOBOL 2017 R1 Overview', link: '/pages/release-overview/release-overview-2017-R1/release-overview-2017-R1',
                collapsed: true, 
                items: [ { text: 'Introduction', link: '/pages/release-overview/release-overview-2017-R1/release-overview-2017-R1'},  ]},
              { text: 'isCOBOL 2016 R2 Overview', link: '/pages/release-overview/release-overview-2016-R2/release-overview-2016-R2',
                collapsed: true, 
                items: [ { text: 'Introduction', link: '/pages/release-overview/release-overview-2016-R2/release-overview-2016-R2'},  ]},
              { text: 'isCOBOL 2016 R1 Overview', link: '/pages/release-overview/release-overview-2016-R1/release-overview-2016-R1',
                collapsed: true, 
                items: [ { text: 'Introduction', link: '/pages/release-overview/release-overview-2016-R1/release-overview-2016-R1'},  ]},
              { text: 'isCOBOL 2015 R1 Overview', link: '/pages/release-overview/release-overview-2015-R1/release-overview-2015-R1',
                collapsed: true, 
                items: [ { text: 'Introduction', link: '/pages/release-overview/release-overview-2015-R1/release-overview-2015-R1'},  ]}
            ]},

          { text: 'isCOBOL Evolve', link: '/pages/is-cobol-evolve/Introduction/key-topics',
            collapsed: true,
            items: [
              { text: 'Introduction', link: '/pages/is-cobol-evolve/Introduction/key-topics', collapsed: true, 
                items: [ { text: 'Key Topics', link: '/pages/is-cobol-evolve/Introduction/key-topics'},
                         { text: 'Introduction to isCOBOL Evolve', link: '/pages/is-cobol-evolve/Introduction/Introduction-isCOBOL-Evolve/introduction-to-iscobol-evolve', collapsed: true,
                           items: [ { text: 'Introduction to isCOBOL Evolve', link: '/pages/is-cobol-evolve/Introduction/Introduction-isCOBOL-Evolve/introduction-to-iscobol-evolve'},
                                    { text: 'System Requirments', link: '/pages/is-cobol-evolve/Introduction/Introduction-isCOBOL-Evolve/system-requirements'},  
                                    { text: 'Limits and Ranges', link: '/pages/is-cobol-evolve/Introduction/Introduction-isCOBOL-Evolve/limits-ranges'},
                                    { text: 'Installation, Upgrade and License Activation', link: '/pages/is-cobol-evolve/Introduction/Introduction-isCOBOL-Evolve/installation-upgrade-license'}
                        ]},
                         { text: 'The Basics', link: '/pages/is-cobol-evolve/Introduction/Basics/basics', collapsed: true,
                           items: [ { text: 'isCOBOL and Java', link: '/pages/is-cobol-evolve/Introduction/Basics/isCOBOL-Java/cobol_java', collapsed: true,
                                 items: [ { text: 'The JDK and JRE', link: '/pages/is-cobol-evolve/Introduction/Basics/isCOBOL-Java/JDK-JRE'},
                                          { text: 'The Java Vrirtual Machine (JVM)', link: '/pages/is-cobol-evolve/Introduction/Basics/isCOBOL-Java/JVM'},  
                                          { text: 'Java Classes', link: '/pages/is-cobol-evolve/Introduction/Basics/isCOBOL-Java/Java-Classes'},
                                          { text: 'JAR Files and the Jar Utility', link: '/pages/is-cobol-evolve/Introduction/Basics/isCOBOL-Java/JAR_Files-JAR_Utility'},
                                          { text: 'Class loading', link: '/pages/is-cobol-evolve/Introduction/Basics/isCOBOL-Java/Class-loading'},
                                          { text: 'The Library Path', link: '/pages/is-cobol-evolve/Introduction/Basics/isCOBOL-Java/Library-Path'},
                                          { text: 'More Information', link: '/pages/is-cobol-evolve/Introduction/Basics/isCOBOL-Java/More-Info'} ]},
                        ]},
                         { text: 'Wrappers', link: '/pages/is-cobol-evolve/Introduction/Wrappers/wrappers', collapsed: true,
                          items: [ { text: 'JVM and SDK libraries association', link: '/pages/is-cobol-evolve/Introduction/Wrappers/JVM-SDK-libraries-association'}
                        ]},
                         { text: 'Special Features', link: '/pages/is-cobol-evolve/Introduction/Special-Features/special-features', collapsed: true,
                          items: [ { text: 'New syntax', link: '/pages/is-cobol-evolve/Introduction/Special-Features/new-syntax'},
                                   { text: 'I/O', link: '/pages/is-cobol-evolve/Introduction/Special-Features/Input-Output'},
                                   { text: 'Routines and functions', link: '/pages/is-cobol-evolve/Introduction/Special-Features/routines-functions'},
                                   { text: 'Distributed environment (Application Server)', link: '/pages/is-cobol-evolve/Introduction/Special-Features/distribuited-environment'},
                                   { text: 'GUI', link: '/pages/is-cobol-evolve/Introduction/Special-Features/GUI'},
                                   { text: 'Debugger', link: '/pages/is-cobol-evolve/Introduction/Special-Features/debugger'}
                        ]},
                  ]},
              { text: 'SDK Users Guide', link: '/pages/is-cobol-evolve/release-overview-2015-R1/release-overview-2015-R1',
                collapsed: true, 
                items: [ { text: 'Introduction', link: '/pages/is-cobol-evolve/release-overview-2015-R1/key-topics'},  ]},
              { text: 'Language Reference', link: '/pages/is-cobol-evolve/release-overview-2015-R1/release-overview-2015-R1',
                collapsed: true, 
                items: [ { text: 'Introduction', link: '/pages/is-cobol-evolve/release-overview-2015-R1/key-topics'},  ]},
              { text: 'User Reference', link: '/pages/is-cobol-evolve/release-overview-2015-R1/release-overview-2015-R1',
                collapsed: true, 
                items: [ { text: 'Introduction', link: '/pages/is-cobol-evolve/release-overview-2015-R1/key-topics'},  ]},
              { text: 'Appendices', link: '/pages/is-cobol-evolve/release-overview-2015-R1/release-overview-2015-R1',
                collapsed: true, 
                items: [ { text: 'Introduction', link: '/pages/is-cobol-evolve/release-overview-2015-R1/key-topics'},  ]}
            ]},

          { text: 'isCOBOL IDE', link: '/pages/is-cobol-IDE/key-topics',
            collapsed: true,
            items: [
              { text: 'Key Topics', link: '/pages/is-cobol-IDE/key-topics' },
              { text: 'Overview', link: '/pages/is-cobol-IDE/overview' },
              { text: 'Getting Started', link: '/pages/is-cobol-IDE/Getting-Started/getting-started',
                collapsed: true,
                items: [
                  { text: 'Download and install the Java Development Kit (JDK)', link: '/pages/is-cobol-IDE/Getting-Started/download-JDK'},
                  { text: 'Download and install isCOBOL Evolve', link: '/pages/is-cobol-IDE/Getting-Started/download-isCOBOL-Evolve'},
                  { text: 'Activate the License', link: '/pages/is-cobol-IDE/Getting-Started/activate'}]},
              { text: 'Starting isCOBOL IDE and selecting the workspace', link: '/pages/is-cobol-IDE/starting'},
              { text: 'Configuration', link: '/pages/is-cobol-IDE/Configuration/configuration',
                collapsed: true,
                items: [
                  { text: 'Startup options', link: '/pages/is-cobol-IDE/Configuration/startup-options'},
                  { text: 'Customization', link: '/pages/is-cobol-IDE/Configuration/Customization/customization',
                    collapsed: true,
                    items: [
                      { text: 'Verifying Java availability', link: '/pages/is-cobol-IDE/Configuration/Customization/verifying-java-availability'},
                      { text: 'Binding additional JRE', link: '/pages/is-cobol-IDE/Configuration/Customization/binding-additional-JRE'},
                      { text: 'Binding additional isCOBOL SDK', link: '/pages/is-cobol-IDE/Configuration/Customization/binding-additional-isCOBOL-SDK'},
                      { text: 'Miscellaneous options', link: '/pages/is-cobol-IDE/Configuration/Customization/miscellaneous-options'},
                      { text: 'Code Generation settings', link: '/pages/is-cobol-IDE/Configuration/Customization/code-generation-settings'},
                      { text: 'Compile/Build settings', link: '/pages/is-cobol-IDE/Configuration/Customization/compile-build-settings'},
                      { text: 'Setting Data Designer options', link: '/pages/is-cobol-IDE/Configuration/Customization/setting-data-designer-options'},
                      { text: 'Setting Editor preferences', link: '/pages/is-cobol-IDE/Configuration/Customization/setting-editor-preferences'},
                      { text: 'Configuring the Content Assistant', link: '/pages/is-cobol-IDE/Configuration/Customization/configuring-content-assistant'},
                      { text: 'Associating file types with the proper editor', link: '/pages/is-cobol-IDE/Configuration/Customization/associating-file-types-proper-editor'},
                      { text: 'Setting keyboard shortcuts', link: '/pages/is-cobol-IDE/Configuration/Customization/setting-keyboard-shortcuts'},
                      { text: 'Setting the Project initial settings', link: '/pages/is-cobol-IDE/Configuration/Customization/setting-project-initial-settings'},
                      { text: 'Setting Screen Designer preferences', link: '/pages/is-cobol-IDE/Configuration/Customization/Setting-Screen-Designer-Preferences/setting-screen-designer-preferences',
                        collapsed: true,
                        items: [
                          { text: 'Setting Screen defaults', link: '/pages/is-cobol-IDE/Configuration/Customization/Setting-Screen-Designer-Preferences/setting-screen-defaults' },
                          { text: 'Loading Screen Templates', link: '/pages/is-cobol-IDE/Configuration/Customization/Setting-Screen-Designer-Preferences/loading-screen-templates' },
                          { text: 'Setting property Visibility', link: '/pages/is-cobol-IDE/Configuration/Customization/Setting-Screen-Designer-Preferences/setting-property-visibility' },
                          { text: 'Setting the Look And Feel', link: '/pages/is-cobol-IDE/Configuration/Customization/Setting-Screen-Designer-Preferences/setting-look-and-feel'}]},
                      { text: 'Setting Report Designer preferences', link: '/pages/is-cobol-IDE/Configuration/Customization/Setting-Report-Designer-preferences/setting-report-designer-preferences',
                        collapsed: true,
                        items: [
                          { text: 'Setting Report defaults', link: '/pages/is-cobol-IDE/Configuration/Customization/Setting-Report-Designer-preferences/setting-report-defaults' },
                          { text: 'Loading Report Templates', link: '/pages/is-cobol-IDE/Configuration/Customization/Setting-Report-Designer-preferences/loading-report-templates' },
                          { text: 'Setting Property visibility', link: '/pages/is-cobol-IDE/Configuration/Customization/Setting-Report-Designer-preferences/setting-property-visibility' },]},
                      { text: 'Setting Run/Debug options', link: '/pages/is-cobol-IDE/Configuration/Customization/setting-run-debug-options'},
                      { text: 'Configuring the Import Generic COBOL Program Feature', link: '/pages/is-cobol-IDE/Configuration/Customization/configuring-import-generic-cobol-program-feature'},
                      { text: 'Configuring isCOBOL Tools', link: '/pages/is-cobol-IDE/Configuration/Customization/configuring-isCOBOL-tools'},
                      { text: 'Configuring Cobol WOW', link: '/pages/is-cobol-IDE/Configuration/Customization/configuring-cobol-wow'},
                      { text: 'Linking the isCOBOL documentation', link: '/pages/is-cobol-IDE/Configuration/Customization/linking-isCOBOL-documentation'},
                      { text: 'Configuring Startup and Shutdown preferences', link: '/pages/is-cobol-IDE/Configuration/Customization/configuring-startup-shutdown-preferences'},
                      { text: 'Configuring launching preferences', link: '/pages/is-cobol-IDE/Configuration/Customization/configuring-launching-preferences'},
                      { text: 'Configuring the Local History', link: '/pages/is-cobol-IDE/Configuration/Customization/configuring-local-history'}]},
                  ]},
              { text: 'Import / Export of Workspace settings', link: '/pages/is-cobol-IDE/import-export' },
              { text: 'License Management', link: '/pages/is-cobol-IDE/license-management' },
              { text: 'The isCOBOL IDE Perspective', link: '/pages/is-cobol-IDE/The-isCOBOL-IDE-Perspective/iscobolIDE-perspective',
                collapsed: true,
                items: [
                  { text: 'isCOBOL Explorer', link: '/pages/is-cobol-IDE/The-isCOBOL-IDE-Perspective/isCOBOL-Explorer' },
                  { text: 'Servers', link: '/pages/is-cobol-IDE/The-isCOBOL-IDE-Perspective/Servers' },
                  { text: 'Editors', link: '/pages/is-cobol-IDE/The-isCOBOL-IDE-Perspective/Editors' },
                  { text: 'Outline', link: '/pages/is-cobol-IDE/The-isCOBOL-IDE-Perspective/Outline' },
                  { text: 'Properties', link: '/pages/is-cobol-IDE/The-isCOBOL-IDE-Perspective/Properties' },
                  { text: 'Problems', link: '/pages/is-cobol-IDE/The-isCOBOL-IDE-Perspective/Problems' },
                  { text: 'Console', link: '/pages/is-cobol-IDE/The-isCOBOL-IDE-Perspective/Console' },
                  { text: 'Search', link: '/pages/is-cobol-IDE/The-isCOBOL-IDE-Perspective/Search' },
                  { text: 'Bookmarks', link: '/pages/is-cobol-IDE/The-isCOBOL-IDE-Perspective/Bookmarks' },
                  { text: 'Tasks', link: '/pages/is-cobol-IDE/The-isCOBOL-IDE-Perspective/Tasks' },
                  { text: 'History', link: '/pages/is-cobol-IDE/The-isCOBOL-IDE-Perspective/History' },
                  { text: 'Error Log', link: '/pages/is-cobol-IDE/The-isCOBOL-IDE-Perspective/Error-Log' },
                  { text: 'Coverage', link: '/pages/is-cobol-IDE/The-isCOBOL-IDE-Perspective/Coverage' },
                  { text: 'isUnit', link: '/pages/is-cobol-IDE/The-isCOBOL-IDE-Perspective/isUnit' },
                  { text: 'Profiler', link: '/pages/is-cobol-IDE/The-isCOBOL-IDE-Perspective/Profiler' },
                  { text: 'Customization', link: '/pages/is-cobol-IDE/The-isCOBOL-IDE-Perspective/Customization' },
                ]},
              { text: 'Working with Projects', link: '/pages/is-cobol-IDE/Working-With-Projects',
                collapsed: true,
                items: [
                  { text: 'Projects Overview', link: '/pages/is-cobol-IDE/projects/overview' }]},
              { text: 'Working with Remote Projects', link: '/pages/is-cobol-IDE/Working-With-Remote-Projects/',
                collapsed: true,
                items: [
                  { text: 'Remote Projects Overview', link: '/pages/is-cobol-IDE/remote-projects/overview' }]},
              { text: 'Screen Programs', link: '/pages/is-cobol-IDE/Screen-Programs/',
                collapsed: true,
                items: [
                  { text: 'Screen Programs Overview', link: '/pages/is-cobol-IDE/screen-programs/overview' }]},
              { text: 'Reports', link: '/pages/is-cobol-IDE/Reports/',
                collapsed: true,
                items: [
                  { text: 'Reports Overview', link: '/pages/is-cobol-IDE/reports/overview' }]},
              { text: 'File Layouts',
                collapsed: true, link: '/pages/is-cobol-IDE/File-Layouts/',
                items: [
                  { text: 'File Layouts Overview', link: '/pages/is-cobol-IDE/file-layouts/overview' }]},
              { text: 'isCOBOL Tools', link: '/pages/is-cobol-IDE/isCOBOL-Tools',
                collapsed: true,
                items: [
                  { text: 'Tools Overview', link: '/pages/is-cobol-IDE/tools/overview' }]},
              { text: 'External Tools', link: '/pages/is-cobol-IDE/external-tools' },
              { text: 'Importing programs from AcuBench', link: '/pages/is-cobol-IDE/Importing-programs-from-AcuBench/',
                collapsed: true,
                items: [
                  { text: 'AcuBench Import', link: '/pages/is-cobol-IDE/import/acubench' }]},
              { text: 'Importing programs from Totem', link: '/pages/is-cobol-IDE/Importing-programs-from-Totem',
                collapsed: true,
                items: [
                  { text: 'Totem Import', link: '/pages/is-cobol-IDE/import/totem' }]},
              { text: 'Importing programs from Cobol WOW', link: '/pages/is-cobol-IDE/importing-programs-from-cobol-wow' },
              { text: 'Importing a Program with Screen Section', link: '/pages/is-cobol-IDE/importing-program-with-screen-section' },
              { text: 'Command-line usage', link: '/pages/is-cobol-IDE/Command-line-usage',
                collapsed: true,
                items: [
                  { text: 'CLI Overview', link: '/pages/is-cobol-IDE/Command-line-usage/' }]},
              { text: 'Troubleshooting', link: '/pages/is-cobol-IDE/troubleshooting' }
            ]},

          { text: 'isCOBOL Extension for VSCode', link: '/pages/is-cobol-extension-for-VScode/iscobol-vscode',
            collapsed: true,
            items: [
              { text: 'Key Topics', link: '/pages/is-cobol-extension-for-VScode/iscobol-vscode' }
            ]
           },
          { text: 'isCOBOL Application Server', link: '/pages/is-cobol-AS/iscobol-AS',
            collapsed: true,
            items: [
              { text: 'Key Topics', link: '/pages/is-cobol-AS/iscobol-AS' }
            ]
           },
          { text: 'isCOBOL WebClient', link: '/pages/is-cobol-web-client/iscobol-webclient',
            collapsed: true,
            items: [
              { text: 'Key Topics', link: '/pages/is-cobol-web-client/iscobol-webclient' }
            ]
           },
          { text: 'isCOBOL DatabaseBridge', link: '/pages/is-cobol-DB-Bridge/iscobol-DB-Bridge',
            collapsed: true,
            items: [
              { text: 'Key Topics', link: '/pages/is-cobol-DB-Bridge/iscobol-DB-Bridge' }
            ]
           },
          { text: 'c-treeRTG for isCOBOL', link: '/pages/c-treeRTG-for-iscobol/ctree',
            collapsed: true,
            items: [
              { text: 'Key Topics', link: '/pages/c-treeRTG-for-iscobol/ctree' }
            ]
           },
          { text: 'isCOBOL EIS', link: '/pages/is-cobol-EIS/iscobol-EIS',
            collapsed: true,
            items: [
              { text: 'Key Topics', link: '/pages/is-cobol-EIS/iscobol-EIS' }
            ]
          },
          { text: 'isCOBOL UDBC', link: '/pages/is-cobol-UDBC/iscobol-UDBC',
            collapsed: true,
            items: [
              { text: 'Key Topics', link: '/pages/is-cobol-UDBC/iscobol-UDBC' }
            ]
           },
          { text: 'Interoperating with isCOBOL', link: '/pages/interoperating-with-is-cobol/interoperating',
            collapsed: true,
            items: [
              { text: 'Key Topics', link: '/pages/interoperating-with-is-cobol/interoperating' }
            ]
           },
          { text: 'Transitioning to isCOBOL', link: '/pages/transitioning-to-is-cobol/transitioning',
            collapsed: true,
            items: [
              { text: 'Key Topics', link: '/pages/transitioning-to-is-cobol/transitioning' }
            ]
           },
          
        ]
      }
    ],
    siteTitle: false, // nasconde il titolo di fianco al logo
    logo: {
        alt: 'Logo aziendale',
        src: '/veryant_logo.png',   // Percorso relativo a /static/
        style: {height: '32px'},
      },

    // ricerca Locale
    search: {
      provider: 'local',
      options: {
        // chiave per mostrare porzione di testo
        detailedView: true, 
        // 2. Ottimizzazione MiniSearch per velocità e precisione
        miniSearch: {
          searchOptions: {
            fuzzy: 0.2, // tollera piccoli errori di battitura
            prefix: true, // trova risultati tramite il prefisso digitato
            boost: { title: 2, text: 1, headings: 1.5 } // più importanza ai titoli
          },
        options: {
            tokenize: (str) => str.split(/[^a-zA-Z0-9À-ž._-]+/) // spiega a MiniSearch come gestire la punteggiatura
          }
        },
        // Personalizzazione testi ricerca
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Enter search term or phrase',
                buttonAriaLabel: 'Search',
              },
              modal: {
                displayDetails: 'Show search details', // bottone per mostrare dettagli ricerca
                resetButtonTitle: 'Reset search',
                noResultsText: 'No results',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate',
                  closeText: 'to close'
                }
              }
            }
          }
        }
      },
      askAi: {
          assistantId: 'XXXYYY',
          sidePanel: {
            panel: {
              variant: 'floating', // or 'inline'
              side: 'right',
              width: '360px',
              expandedWidth: '580px',
              suggestedQuestions: true
            }
          }
        }
    },
    extends: {
    vite: {
      plugins: [OramaPlugin()],
    },
  },
    // documentazione MD
    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/veryant-llc' },
      { icon: 'x', link: 'https://x.com/VeryantCOBOL'},
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UCdB0CZahezDc87F7UIvTXAA'}
    ],

    outline: {
      level: [2, 3, 4],     // Indica di mostrare i livelli da 2 a 3 (h2 e h3)
      label: 'On this page' // Il testo visualizzato sopra l'indice
  },

    markdown: {
    config: (md) => {
      md.use(footnote) // <--- Abilita le note a piè di pagina
    }
  },

    footer: {
      message: '<div style="display: flex; justify-content: space-between; gap: 20px; text-align: left; font-size: 0.9em;"><div><p><strong><a href="https://www.veryant.com/it/legal.html">Terms of Use</a></strong> / <strong><a href="https://www.veryant.com/it/privacy.html">Privacy Policy</a></strong> / <strong><a href="mailto:webmaster@veryant.com">Site Feedback</a></strong> / <strong><a href="https://www.veryant.com/it/contact-request.html">Contact Us</a></strong></p></div><div><p>Email: <a href="mailto:info@veryant.com">info@veryant.com</a> | Tel: +1 619 453 0914</p></div></div>',
      copyright: 'Copyrights © 2026 All Rights Reserved by Veryant LLC'
    }
  }
})
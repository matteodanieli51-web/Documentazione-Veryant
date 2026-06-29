### Runtime Options

The Runtime Framework has a number of properties which can affect the behavior of isCOBOL. These allow the user to specify runtime actions such as authenticating passwords, customizing remote debugging, and specifying file systems. Properties can be set in the configuration file or dynamically changed by the application. A complete list of properties and their definitions is located in the [Configuration](../SDK%20User's%20Guide/Chapter1-CompilerRuntime.05.30.html#ww1028398 "Configuration") section below. Here are a couple of examples of commonly used options.

#### -c

The -c option allows you to pass an additional configuration file:

```cobol
iscrun -c myApp.cfg ProgramName
```

The properties found in the configuration file are appended to the existing configuration.

#### -conly

The -conly option allows you to pass the only configuration file that must be used:

```cobol

```

The properties found in the configuration file are used exclusively. No other configuration file is considered.

#### -coverage

The -coverage option generates a report of the code actually executed in the runtime session. See [isCOBOL Code Coverage](../SDK%20User's%20Guide/Chapter5-CodeCoverage.09.2.html#ww1051038 "isCOBOL Code Coverage") for more information.

```cobol

```

#### -d

The -d option runs the program in debug mode:

```cobol

```

See [Debugger](../SDK%20User's%20Guide/Chapter2-Debugger.06.01.html#ww1021169 "Debugger") for more information about debugging.

#### -info

The -info option displays information about the program class file. For example:

```cobol

```

The returned information contains:

- the class location
- the list of options that were used to compile the program,
- the version of the Compiler (build number) that compiled the program,
- the minimum runtime version (build number) necessary to run the program,
- the list of resources that were embedded via COPY RESOURCE statements.

#### -iut

The -iut option activates the Unit Test feature, allowing you to check if the programs are behaving as expected. It generates a report of the result at the end of the run unit. See [isCOBOL Unit Test](../SDK%20User's%20Guide/Chapter5-CodeCoverage.09.6.html#ww1058442 "isCOBOL Unit Test") for more information.

#### -joe

The -joe option allows you to start JOE’s CobShell. There are two usages:

- open the CobShell in interactive mode:

```cobol

```

- run a script:

```cobol

```

See [JOE](\) for more details.

#### -license

The -license option displays information about the isCOBOL license.

```cobol

```

It’s good practice to use this option along with -c, if applicable, in order to have the runtime looking in every possible configuration to find the active license code. For example:

```cobol

```

#### -profile

The -profile option profiles the runtime activity and generate a report:

```cobol

```

See [Profiling COBOL programs](\) for details.

#### -t

The -t option runs in terminal mode:

```cobol

```

See [Using CHARVA](\) for details.

#### -time

The -time option prints the time spent on the console output when the run unit terminates:

```cobol

```

#### -update

Using the -update option causes the runtime to look for updates through [ISUPDATER (Update Facility)](../SDK%20User's%20Guide/Chapter4-Utilities.08.13.html#ww1046093 "ISUPDATER (Update Facility)") before starting.

```cobol

```

The -uc option allows you to specify a custom isUpdater configuration file. If the -uc option is not used, the runtime looks for a file named isupdater.properties in the Classpath.

The configuration file must contain the setting to connect to a update server through HTTP. This setting is [swupdater.site](\). The HTTP server should be properly configured to provide an update of the isCOBOL SDK. See [Setup of an update server for the isCOBOL SDK](\) for details.

The configuration file could contain also additional settings (see Update Facility’s [Client Configuration (isupdater.properties)](\) for details).

If the configuration file includes only [swupdater.site](\), the runtime uses a default configuration built according to the isCOBOL installation directory on the local PC, for example it sets swupdater.version.iscobol to the build number of lib/iscobol.jar, swupdater.directory.iscobol to the path of the lib folder, swupdater.directory.iscobolJars to the path of the jars folder and swupdater.directory.iscobolNative to the location of native libraries (bin folder under Windows, native/lib folder on other platforms).

The need of updating is determined by comparing the build numbers specified by the swupdater.version properties used by the runtime with the build numbers specified by the swupdater.version properties in the server side swupdater.properties file.

a. If the server is down or no update is necessary, the runtime execution continues normally
b. If some updates were executed, the runtime is automatically restarted.

#### -utility

The -utility option allows you to run a utility:

```cobol

```

UtilityName can be any of the following (case insensitive):

- cobfileio
- cpk
- gife
- isl
- ismigrate
- jdbc2fd
- jutil
- xml2wrk

Note - Any text following the utility name is passed to the utility as a command-line argument. For this reason, the -utility option should be specified as the last option on the command line. Other runtime options must be specified before the -utility option; otherwise, they will be interpreted as utility parameters rather than runtime options.

#### -v

The -v option displays version information about isCOBOL.

```cobol

```

#### -vv

The -vv option displays version information about isCOBOL and the current file handler (the file handler specified by the [iscobol.file.index](\) configuration property, whose default value is "jisam").

```cobol

```

#### --system

The --system option forces the current system Look and Feel for the GUI (default if none of the next four options is used):

```cobol

```

#### --metal

The --metal option forces the Metal Look and Feel for the GUI:

```cobol

```

#### --flatlaf

The --flatlaf option forces the FlatLaf Look and Feel for the GUI; it must be followed by the desired theme between FlatDarculaLaf, FlatDarkLaf, FlatIntelliJLaf and FlatLightLaf. Example:

```cobol

```

Note - an invalid theme will cause the Metal Look and Feel to be used instead of the FlatLaf Look and Feel.

#### --GTK

The --GTK option forces the GTK Look and Feel for the GUI (not available on Windows):

```cobol

```

#### --nimbus

The --nimbus option forces the Nimbus Look and Feel for the GUI:

```cobol

```

Multiple options on the command-line

All the above options except for -v and -info can be combined and appear in any order in the command-line. For example, if you want to debug your program using a specific configuration file and forcing the light FlatLaf Look and Feel, you use:

```cobol

```

It’s not possible to use -coverage and -profile together.

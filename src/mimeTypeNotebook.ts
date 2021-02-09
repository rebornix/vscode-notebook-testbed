import * as vscode from 'vscode';


export class MimeTypeContentProvider implements vscode.NotebookContentProvider {
    // options?: vscode.NotebookDocumentContentOptions | undefined;
    // onDidChangeNotebookContentOptions?: vscode.Event<vscode.NotebookDocumentContentOptions> | undefined;
    openNotebook(uri: vscode.Uri, openContext: vscode.NotebookDocumentOpenContext): vscode.NotebookData {
        if (uri.scheme === 'git') {
            return {
                metadata: {},
                languages: ['*'],
                cells: [
                    // simple mimtype
                    {
                        cellKind: vscode.CellKind.Code,
                        language: 'javascript',
                        metadata: {},
                        source: 'console.log(1);\nconsole.log(2);\n',
                        outputs: [
                            new vscode.NotebookCellOutput([
                                new vscode.NotebookCellOutputItem('application/x.notebook.stream', 1),
                                new vscode.NotebookCellOutputItem('application/x.notebook.stream', 2)
                            ])
                        ]
                    },
                    {
                        cellKind: vscode.CellKind.Code,
                        language: 'javascript',
                        metadata: {},
                        source: ['console.error("");', 'console.error2("");'].join('\n'),
                        outputs: [
                            new vscode.NotebookCellOutput([
                                new vscode.NotebookCellOutputItem('application/x.notebook.error-traceback', {
                                    ename: 'error not defined',
                                    evalue: 'console.error not defined',
                                    traceback: [
                                        'console.error'
                                    ]
                                }),
                                new vscode.NotebookCellOutputItem('application/x.notebook.error-traceback', {
                                    ename: 'error2 not defined',
                                    evalue: 'console.error2 not defined',
                                    traceback: [
                                        'console.error2'
                                    ]
                                }),
                            ])
                        ]
                    },
                    {
                        cellKind: vscode.CellKind.Code,
                        language: 'javascript',
                        metadata: {},
                        source: 'console.text(1);\nconsole.text(2);\n',
                        outputs: [
                            new vscode.NotebookCellOutput([
                                new vscode.NotebookCellOutputItem('text/plain', 1),
                                new vscode.NotebookCellOutputItem('text/plain', 2)
                            ])
                        ]
                    },
                    {
                        cellKind: vscode.CellKind.Code,
                        language: 'javascript',
                        metadata: {},
                        source: ['markdown("# header 1");', 'markdown("## header ");'].join('\n'),
                        outputs: [
                            new vscode.NotebookCellOutput([
                                new vscode.NotebookCellOutputItem('text/markdown', '# header 1'),
                                new vscode.NotebookCellOutputItem('text/markdown', '## header 2'),
                            ])
                        ]
                    },
                    {
                        cellKind: vscode.CellKind.Code,
                        language: 'javascript',
                        metadata: {},
                        source: ['json({"a": 1});', 'json({"b": 2})'].join('\n'),
                        outputs: [
                            new vscode.NotebookCellOutput([
                                new vscode.NotebookCellOutputItem('application/json', { "a": 1 }),
                                new vscode.NotebookCellOutputItem('application/json', { "b": 2 }),
                            ])
                        ]
                    },
                    {
                        cellKind: vscode.CellKind.Code,
                        language: 'javascript',
                        metadata: {},
                        source: ['html("<h1>html header 1</h1>");', 'html("<h2>html header 2</h2>'].join('\n'),
                        outputs: [
                            new vscode.NotebookCellOutput([
                                new vscode.NotebookCellOutputItem('text/html', "<h1>html header 1</h1>"),
                                new vscode.NotebookCellOutputItem('text/html', "<h2>html header 2</h2>"),
                            ])
                        ]
                    },
                    {
                        cellKind: vscode.CellKind.Code,
                        language: 'javascript',
                        metadata: {},
                        source: ['png'].join('\n'),
                        outputs: [
                            new vscode.NotebookCellOutput([
                                new vscode.NotebookCellOutputItem('image/png', `R0lGODdhMAAwAPAAAAAAAP///ywAAAAAMAAwAAAC8IyPqcvt3wCcDkiLc7C0qwyGHhSWpjQu5yqmCYsapyuvUUlvONmOZtfzgFzByTB10QgxOR0TqBQejhRNzOfkVJ+5YiUqrXF5Y5lKh/DeuNcP5yLWGsEbtLiOSpa/TPg7JpJHxyendzWTBfX0cxOnKPjgBzi4diinWGdkF8kjdfnycQZXZeYGejmJlZeGl9i2icVqaNVailT6F5iJ90m6mvuTS4OK05M0vDk0Q4XUtwvKOzrcd3iq9uisF81M1OIcR7lEewwcLp7tuNNkM3uNna3F2JQFo97Vriy/Xl4/f1cf5VWzXyym7PHhhx4dbgYKAAA7`),
                                new vscode.NotebookCellOutputItem('image/png', `R0lGODdhMAAwAPAAAAAAAP///ywAAAAAMAAwAAAC8IyPqcvt3wCcDkiLc7C0qwyGHhSWpjQu5yqmCYsapyuvUUlvONmOZtfzgFzByTB10QgxOR0TqBQejhRNzOfkVJ+5YiUqrXF5Y5lKh/DeuNcP5yLWGsEbtLiOSpa/TPg7JpJHxyendzWTBfX0cxOnKPjgBzi4diinWGdkF8kjdfnycQZXZeYGejmJlZeGl9i2icVqaNVailT6F5iJ90m6mvuTS4OK05M0vDk0Q4XUtwvKOzrcd3iq9uisF81M1OIcR7lEewwcLp7tuNNkM3uNna3F2JQFo97Vriy/Xl4/f1cf5VWzXyym7PHhhx4dbgYKAAA7`),
                            ])
                        ]
                    },
                    {
                        cellKind: vscode.CellKind.Code,
                        language: 'javascript',
                        metadata: {},
                        source: ['svg red', 'svg blue'].join('\n'),
                        outputs: [
                            new vscode.NotebookCellOutput([
                                new vscode.NotebookCellOutputItem('image/svg+xml', [
                                    "<svg baseProfile=\"full\" height=\"200\" version=\"1.1\" width=\"300\" xmlns=\"http://www.w3.org/2000/svg\">\n",
                                    "  <rect fill=\"red\" height=\"100%\" width=\"100%\"/>\n",
                                    "  <circle cx=\"150\" cy=\"100\" fill=\"green\" r=\"80\"/>\n",
                                    "  <text fill=\"white\" font-size=\"60\" text-anchor=\"middle\" x=\"150\" y=\"125\">SVG</text>\n",
                                    "</svg>"
                                   ]),
                                new vscode.NotebookCellOutputItem('image/svg+xml',[
                                    "<svg baseProfile=\"full\" height=\"200\" version=\"1.1\" width=\"300\" xmlns=\"http://www.w3.org/2000/svg\">\n",
                                    "  <rect fill=\"blue\" height=\"100%\" width=\"100%\"/>\n",
                                    "  <circle cx=\"150\" cy=\"100\" fill=\"green\" r=\"80\"/>\n",
                                    "  <text fill=\"white\" font-size=\"60\" text-anchor=\"middle\" x=\"150\" y=\"125\">SVG</text>\n",
                                    "</svg>"
                                   ]),
                            ])
                        ]
                    },
                    // mixed mimetype
                    {
                        cellKind: vscode.CellKind.Code,
                        language: 'javascript',
                        metadata: {},
                        source: 'mix text and error',
                        outputs: [
                            new vscode.NotebookCellOutput([
                                new vscode.NotebookCellOutputItem('application/x.notebook.stream', 1),
                                new vscode.NotebookCellOutputItem('application/x.notebook.error-traceback', {
                                    ename: 'error2 not defined',
                                    evalue: 'console.error2 not defined',
                                    traceback: [
                                        'console.error2'
                                    ]
                                }),
                            ])
                        ]
                    },
                    {
                        cellKind: vscode.CellKind.Code,
                        language: 'javascript',
                        metadata: {},
                        source: 'mix png and html',
                        outputs: [
                            new vscode.NotebookCellOutput([
                                new vscode.NotebookCellOutputItem('text/html', "<h1>html header 1</h1>"),
                                new vscode.NotebookCellOutputItem('image/png', `R0lGODdhMAAwAPAAAAAAAP///ywAAAAAMAAwAAAC8IyPqcvt3wCcDkiLc7C0qwyGHhSWpjQu5yqmCYsapyuvUUlvONmOZtfzgFzByTB10QgxOR0TqBQejhRNzOfkVJ+5YiUqrXF5Y5lKh/DeuNcP5yLWGsEbtLiOSpa/TPg7JpJHxyendzWTBfX0cxOnKPjgBzi4diinWGdkF8kjdfnycQZXZeYGejmJlZeGl9i2icVqaNVailT6F5iJ90m6mvuTS4OK05M0vDk0Q4XUtwvKOzrcd3iq9uisF81M1OIcR7lEewwcLp7tuNNkM3uNna3F2JQFo97Vriy/Xl4/f1cf5VWzXyym7PHhhx4dbgYKAAA7`),
                            ])
                        ]
                    },
                    // multiple outputs
                    {
                        cellKind: vscode.CellKind.Code,
                        language: 'javascript',
                        metadata: {},
                        source: 'mix text and error',
                        outputs: [
                            new vscode.NotebookCellOutput([
                                new vscode.NotebookCellOutputItem('application/x.notebook.stream', 1),
                                new vscode.NotebookCellOutputItem('application/x.notebook.error-traceback', {
                                    ename: 'error2 not defined',
                                    evalue: 'console.error2 not defined',
                                    traceback: [
                                        'console.error2'
                                    ]
                                }),
                            ]),
                            new vscode.NotebookCellOutput([
                                new vscode.NotebookCellOutputItem('text/markdown', '# header 1'),
                                new vscode.NotebookCellOutputItem('image/svg+xml', [
                                    "<svg baseProfile=\"full\" height=\"200\" version=\"1.1\" width=\"300\" xmlns=\"http://www.w3.org/2000/svg\">\n",
                                    "  <rect fill=\"red\" height=\"100%\" width=\"100%\"/>\n",
                                    "  <circle cx=\"150\" cy=\"100\" fill=\"green\" r=\"80\"/>\n",
                                    "  <text fill=\"white\" font-size=\"60\" text-anchor=\"middle\" x=\"150\" y=\"125\">SVG</text>\n",
                                    "</svg>"
                                   ]),
                            ]),
                        ]
                    },
                    // custom renderer
                    {
                        // application/geo+json
                        cellKind: vscode.CellKind.Code,
                        language: 'python',
                        metadata: {},
                        source: [
                            "def GeoJSON(data={}, metadata={}):\r\n",
                            "    bundle = {\r\n",
                            "            'application/geo+json': data,\r\n",
                            "            'text/plain': '<IPython.display.GeoJSON object>'\r\n",
                            "    }\r\n",
                            "    metadata = {\r\n",
                            "        'application/geo+json': metadata\r\n",
                            "    }\r\n",
                            "    display(bundle, metadata=metadata, raw=True)\r\n",
                            "\r\n",
                            "GeoJSON({\r\n",
                            "    \"type\": \"Feature\",\r\n",
                            "    \"geometry\": {\r\n",
                            "        \"type\": \"Point\",\r\n",
                            "        \"coordinates\": [-117.4563712, 35.0163116]\r\n",
                            "    }\r\n",
                            "})"
                           ].join(''),
                        outputs: [
                            new vscode.NotebookCellOutput([
                                new vscode.NotebookCellOutputItem('application/geo+json', {
                                    "geometry": {
                                     "coordinates": [
                                      -117.4563712,
                                      35.0163116
                                     ],
                                     "type": "Point"
                                    },
                                    "type": "Feature"
                                }),
                                new vscode.NotebookCellOutputItem('text/plain', "<IPython.display.GeoJSON object>")
                            ]),
                        ]
                    },
                    // metadata change
                    {
                        // application/geo+json
                        cellKind: vscode.CellKind.Code,
                        language: 'python',
                        metadata: {},
                        source: [
                            "def GeoJSON(data={}, metadata={}):\r\n",
                            "    bundle = {\r\n",
                            "            'application/geo+json': data,\r\n",
                            "            'text/plain': '<IPython.display.GeoJSON object>'\r\n",
                            "    }\r\n",
                            "    metadata = {\r\n",
                            "        'application/geo+json': metadata\r\n",
                            "    }\r\n",
                            "    display(bundle, metadata=metadata, raw=True)\r\n",
                            "\r\n",
                            "GeoJSON({\r\n",
                            "    \"type\": \"Feature\",\r\n",
                            "    \"geometry\": {\r\n",
                            "        \"type\": \"Point\",\r\n",
                            "        \"coordinates\": [-117.4563712, 35.0163116]\r\n",
                            "    }\r\n",
                            "})"
                           ].join(''),
                        outputs: [
                            new vscode.NotebookCellOutput([
                                new vscode.NotebookCellOutputItem('application/geo+json', {
                                    "geometry": {
                                     "coordinates": [
                                      -117.4563712,
                                      35.0163116
                                     ],
                                     "type": "Point"
                                    },
                                    "type": "Feature"
                                }, { "background": "#333"}),
                                new vscode.NotebookCellOutputItem('text/plain', "<IPython.display.GeoJSON object>")
                            ]),
                        ]
                    }
                ]
            };
        }

        return {
            metadata: {},
            languages: ['*'],
            cells: [
                {
                    cellKind: vscode.CellKind.Code,
                    language: 'javascript',
                    metadata: {},
                    source: 'console.log(1);\nconsole.log(3);\n',
                    outputs: [
                        new vscode.NotebookCellOutput([
                            new vscode.NotebookCellOutputItem('application/x.notebook.stream', 1),
                            new vscode.NotebookCellOutputItem('application/x.notebook.stream', 3)
                        ])
                    ]
                },
                {
                    cellKind: vscode.CellKind.Code,
                    language: 'javascript',
                    metadata: {},
                    source: ['console.error("");', 'console.error3("");'].join('\n'),
                    outputs: [
                        new vscode.NotebookCellOutput([
                            new vscode.NotebookCellOutputItem('application/x.notebook.error-traceback', {
                                ename: 'error not defined',
                                evalue: 'console.error not defined',
                                traceback: [
                                    'console.error'
                                ]
                            }),
                            new vscode.NotebookCellOutputItem('application/x.notebook.error-traceback', {
                                ename: 'error2 not defined',
                                evalue: 'console.error3 not defined',
                                traceback: [
                                    'console.error3'
                                ]
                            }),
                        ])
                    ]
                },
                {
                    cellKind: vscode.CellKind.Code,
                    language: 'javascript',
                    metadata: {},
                    source: 'console.text(1);\nconsole.text(3);\n',
                    outputs: [
                        new vscode.NotebookCellOutput([
                            new vscode.NotebookCellOutputItem('text/plain', 1),
                            new vscode.NotebookCellOutputItem('text/plain', 3)
                        ])
                    ]
                },
                {
                    cellKind: vscode.CellKind.Code,
                    language: 'javascript',
                    metadata: {},
                    source: ['markdown("# header 1");', 'markdown("### header 3");'].join('\n'),
                    outputs: [
                        new vscode.NotebookCellOutput([
                            new vscode.NotebookCellOutputItem('text/markdown', '# header 1'),
                            new vscode.NotebookCellOutputItem('text/markdown', '### header 3'),
                        ])
                    ]
                },
                {
                    cellKind: vscode.CellKind.Code,
                    language: 'javascript',
                    metadata: {},
                    source: ['json({"a": 1});', 'json({"b": 3})'].join('\n'),
                    outputs: [
                        new vscode.NotebookCellOutput([
                            new vscode.NotebookCellOutputItem('application/json', { "a": 1 }),
                            new vscode.NotebookCellOutputItem('application/json', { "b": 3 }),
                        ])
                    ]
                },
                {
                    cellKind: vscode.CellKind.Code,
                    language: 'javascript',
                    metadata: {},
                    source: ['html("<h1>html header 1</h1>");', 'html("<h3>html header 3</h3>'].join('\n'),
                    outputs: [
                        new vscode.NotebookCellOutput([
                            new vscode.NotebookCellOutputItem('text/html', "<h1>html header 1</h1>"),
                            new vscode.NotebookCellOutputItem('text/html', "<h3>html header 3</h3>"),
                        ])
                    ]
                },
                {
                    cellKind: vscode.CellKind.Code,
                    language: 'javascript',
                    metadata: {},
                    source: ['png2'].join('\n'),
                    outputs: [
                        new vscode.NotebookCellOutput([
                            new vscode.NotebookCellOutputItem('image/png', `R0lGODdhMAAwAPAAAAAAAP///ywAAAAAMAAwAAAC8IyPqcvt3wCcDkiLc7C0qwyGHhSWpjQu5yqmCYsapyuvUUlvONmOZtfzgFzByTB10QgxOR0TqBQejhRNzOfkVJ+5YiUqrXF5Y5lKh/DeuNcP5yLWGsEbtLiOSpa/TPg7JpJHxyendzWTBfX0cxOnKPjgBzi4diinWGdkF8kjdfnycQZXZeYGejmJlZeGl9i2icVqaNVailT6F5iJ90m6mvuTS4OK05M0vDk0Q4XUtwvKOzrcd3iq9uisF81M1OIcR7lEewwcLp7tuNNkM3uNna3F2JQFo97Vriy/Xl4/f1cf5VWzXyym7PHhhx4dbgYKAAA7`),
                            new vscode.NotebookCellOutputItem('image/png', `R0lGODdhMAAwAPAAAAAAAP///ywAAAAAMAAwAAAC8IyPqcvt3wCcDkiLc7C0qwyGHhSWpjQu5yqmCYsapyuvUUlvONmOZtfzgFzByTB10QgxOR0TqBQejhRNzOfkVJ+5YiUqrXF5Y5lKh/DeuNcP5yLWGsEbtLiOSpa/TPg7JpJHxyendzWTBfX0cxOnKPjgBzi4diinWGdkF8kjdfnycQZXZeYGejmJlZeGl9i2icVqaNVailT6F5iJ90m6mvuTS4OK05M0vDk0Q4XUtwvKOzrcd3iq9uisF81M1OIcR7lEewwcLp7tuNNkM3uNna3F2JQFo97Vriy/Xl4/f1cf5VWzXyym7PHhhx4dbgYKAAA7`),
                        ])
                    ]
                },
                {
                    cellKind: vscode.CellKind.Code,
                    language: 'javascript',
                    metadata: {},
                    source: ['svg red', 'svg orange'].join('\n'),
                    outputs: [
                        new vscode.NotebookCellOutput([
                            new vscode.NotebookCellOutputItem('image/svg+xml', [
                                "<svg baseProfile=\"full\" height=\"200\" version=\"1.1\" width=\"300\" xmlns=\"http://www.w3.org/2000/svg\">\n",
                                "  <rect fill=\"red\" height=\"100%\" width=\"100%\"/>\n",
                                "  <circle cx=\"150\" cy=\"100\" fill=\"green\" r=\"80\"/>\n",
                                "  <text fill=\"white\" font-size=\"60\" text-anchor=\"middle\" x=\"150\" y=\"125\">SVG</text>\n",
                                "</svg>"
                               ]),
                            new vscode.NotebookCellOutputItem('image/svg+xml',[
                                "<svg baseProfile=\"full\" height=\"200\" version=\"1.1\" width=\"300\" xmlns=\"http://www.w3.org/2000/svg\">\n",
                                "  <rect fill=\"orange\" height=\"100%\" width=\"100%\"/>\n",
                                "  <circle cx=\"150\" cy=\"100\" fill=\"green\" r=\"80\"/>\n",
                                "  <text fill=\"white\" font-size=\"60\" text-anchor=\"middle\" x=\"150\" y=\"125\">SVG</text>\n",
                                "</svg>"
                               ]),
                        ])
                    ]
                },
                {
                    cellKind: vscode.CellKind.Code,
                    language: 'javascript',
                    metadata: {},
                    source: 'mix text and error',
                    outputs: [
                        new vscode.NotebookCellOutput([
                            new vscode.NotebookCellOutputItem('application/x.notebook.stream', 1),
                            new vscode.NotebookCellOutputItem('application/x.notebook.error-traceback', {
                                ename: 'error not defined',
                                evalue: 'console.error not defined',
                                traceback: [
                                    'console.error'
                                ]
                            }),
                        ])
                    ]
                },
                {
                    cellKind: vscode.CellKind.Code,
                    language: 'javascript',
                    metadata: {},
                    source: 'mix png and html',
                    outputs: [
                        new vscode.NotebookCellOutput([
                            new vscode.NotebookCellOutputItem('text/html', "<h2>html header 2</h2>"),
                            new vscode.NotebookCellOutputItem('image/png', `R0lGODdhMAAwAPAAAAAAAP///ywAAAAAMAAwAAAC8IyPqcvt3wCcDkiLc7C0qwyGHhSWpjQu5yqmCYsapyuvUUlvONmOZtfzgFzByTB10QgxOR0TqBQejhRNzOfkVJ+5YiUqrXF5Y5lKh/DeuNcP5yLWGsEbtLiOSpa/TPg7JpJHxyendzWTBfX0cxOnKPjgBzi4diinWGdkF8kjdfnycQZXZeYGejmJlZeGl9i2icVqaNVailT6F5iJ90m6mvuTS4OK05M0vDk0Q4XUtwvKOzrcd3iq9uisF81M1OIcR7lEewwcLp7tuNNkM3uNna3F2JQFo97Vriy/Xl4/f1cf5VWzXyym7PHhhx4dbgYKAAA7`),
                        ])
                    ]
                },
                {
                    cellKind: vscode.CellKind.Code,
                    language: 'javascript',
                    metadata: {},
                    source: 'mix text and error',
                    outputs: [
                        new vscode.NotebookCellOutput([
                            new vscode.NotebookCellOutputItem('application/x.notebook.stream', 2),
                            new vscode.NotebookCellOutputItem('application/x.notebook.error-traceback', {
                                ename: 'error2 not defined',
                                evalue: 'console.error2 not defined',
                                traceback: [
                                    'console.error2'
                                ]
                            }),
                        ]),
                        new vscode.NotebookCellOutput([
                            new vscode.NotebookCellOutputItem('text/markdown', '## header 2'),
                            new vscode.NotebookCellOutputItem('image/svg+xml', [
                                "<svg baseProfile=\"full\" height=\"200\" version=\"1.1\" width=\"300\" xmlns=\"http://www.w3.org/2000/svg\">\n",
                                "  <rect fill=\"blue\" height=\"100%\" width=\"100%\"/>\n",
                                "  <circle cx=\"150\" cy=\"100\" fill=\"green\" r=\"80\"/>\n",
                                "  <text fill=\"white\" font-size=\"60\" text-anchor=\"middle\" x=\"150\" y=\"125\">SVG</text>\n",
                                "</svg>"
                               ]),
                        ]),
                    ]
                },
                {
                    // application/geo+json
                    cellKind: vscode.CellKind.Code,
                    language: 'python',
                    metadata: {},
                    source: [
                        "def GeoJSON(data={}, metadata={}):\r\n",
                        "    bundle = {\r\n",
                        "            'application/geo+json': data,\r\n",
                        "            'text/plain': '<IPython.display.GeoJSON object>'\r\n",
                        "    }\r\n",
                        "    metadata = {\r\n",
                        "        'application/geo+json': metadata\r\n",
                        "    }\r\n",
                        "    display(bundle, metadata=metadata, raw=True)\r\n",
                        "\r\n",
                        "GeoJSON({\r\n",
                        "    \"type\": \"Feature\",\r\n",
                        "    \"geometry\": {\r\n",
                        "        \"type\": \"Point\",\r\n",
                        "        \"coordinates\": [-118.4563712, 34.0163116]\r\n",
                        "    }\r\n",
                        "})"
                       ].join(''),
                    outputs: [
                        new vscode.NotebookCellOutput([
                            new vscode.NotebookCellOutputItem('application/geo+json', {
                                "geometry": {
                                 "coordinates": [
                                  -118.4563712,
                                  34.0163116
                                 ],
                                 "type": "Point"
                                },
                                "type": "Feature"
                            }),
                            new vscode.NotebookCellOutputItem('text/plain', "<IPython.display.GeoJSON object>")
                        ]),
                    ]
                },
                // metadata change
                {
                    // application/geo+json
                    cellKind: vscode.CellKind.Code,
                    language: 'python',
                    metadata: {},
                    source: [
                        "def GeoJSON(data={}, metadata={}):\r\n",
                        "    bundle = {\r\n",
                        "            'application/geo+json': data,\r\n",
                        "            'text/plain': '<IPython.display.GeoJSON object>'\r\n",
                        "    }\r\n",
                        "    metadata = {\r\n",
                        "        'application/geo+json': metadata\r\n",
                        "    }\r\n",
                        "    display(bundle, metadata=metadata, raw=True)\r\n",
                        "\r\n",
                        "GeoJSON({\r\n",
                        "    \"type\": \"Feature\",\r\n",
                        "    \"geometry\": {\r\n",
                        "        \"type\": \"Point\",\r\n",
                        "        \"coordinates\": [-117.4563712, 35.0163116]\r\n",
                        "    }\r\n",
                        "})"
                       ].join(''),
                    outputs: [
                        new vscode.NotebookCellOutput([
                            new vscode.NotebookCellOutputItem('application/geo+json', {
                                "geometry": {
                                 "coordinates": [
                                  -117.4563712,
                                  35.0163116
                                 ],
                                 "type": "Point"
                                },
                                "type": "Feature"
                            }, { "background": "#fff"}),
                            new vscode.NotebookCellOutputItem('text/plain', "<IPython.display.GeoJSON object>")
                        ]),
                    ]
                }
            ]
        };
    }
    async resolveNotebook(document: vscode.NotebookDocument, webview: vscode.NotebookCommunication): Promise<void> {
        // throw new Error('Method not implemented.');
        return;
    }

    async saveNotebook(document: vscode.NotebookDocument, cancellation: vscode.CancellationToken): Promise<void> {
        // throw new Error('Method not implemented.');
    }

    async saveNotebookAs(targetResource: vscode.Uri, document: vscode.NotebookDocument, cancellation: vscode.CancellationToken): Promise<void> {
        // throw new Error('Method not implemented.');
    }
    async backupNotebook(document: vscode.NotebookDocument, context: vscode.NotebookDocumentBackupContext, cancellation: vscode.CancellationToken): Promise<vscode.NotebookDocumentBackup> {
        // throw new Error('Method not implemented.');
        return {
            id: context.destination.toString(),
            delete: () => {}
        }
    }

}
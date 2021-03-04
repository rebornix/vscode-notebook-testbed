import * as vscode from 'vscode';


export class MimeTypeContentProvider implements vscode.NotebookContentProvider {
    // options?: vscode.NotebookDocumentContentOptions | undefined;
    // onDidChangeNotebookContentOptions?: vscode.Event<vscode.NotebookDocumentContentOptions> | undefined;
    openNotebook(uri: vscode.Uri, openContext: vscode.NotebookDocumentOpenContext): vscode.NotebookData {
        const metadata = new vscode.NotebookDocumentMetadata();
        
        if (uri.scheme === 'git') {
            return {
                metadata: metadata.with({ trusted: true }),
                cells: [
                    // simple mimtype
                    {
                        cellKind: vscode.NotebookCellKind.Code,
                        language: 'javascript',
                        metadata: new vscode.NotebookCellMetadata(),
                        source: 'console.log(1);\nconsole.log(2);\n',
                        outputs: [
                            new vscode.NotebookCellOutput([
                                new vscode.NotebookCellOutputItem('application/x.notebook.stream', 1),
                                new vscode.NotebookCellOutputItem('application/x.notebook.stream', 2)
                            ])
                        ]
                    },
                    {
                        cellKind: vscode.NotebookCellKind.Code,
                        language: 'javascript',
                        metadata: new vscode.NotebookCellMetadata(),
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
                        cellKind: vscode.NotebookCellKind.Code,
                        language: 'javascript',
                        metadata: new vscode.NotebookCellMetadata(),
                        source: 'console.text(1);\nconsole.text(2);\n',
                        outputs: [
                            new vscode.NotebookCellOutput([
                                new vscode.NotebookCellOutputItem('text/plain', 1),
                                new vscode.NotebookCellOutputItem('text/plain', 2)
                            ])
                        ]
                    },
                    {
                        cellKind: vscode.NotebookCellKind.Code,
                        language: 'javascript',
                        metadata: new vscode.NotebookCellMetadata(),
                        source: ['markdown("# header 1");', 'markdown("## header ");'].join('\n'),
                        outputs: [
                            new vscode.NotebookCellOutput([
                                new vscode.NotebookCellOutputItem('text/markdown', '# header 1'),
                                new vscode.NotebookCellOutputItem('text/markdown', '## header 2'),
                            ])
                        ]
                    },
                    {
                        cellKind: vscode.NotebookCellKind.Code,
                        language: 'javascript',
                        metadata: new vscode.NotebookCellMetadata(),
                        source: ['json({"a": 1});', 'json({"b": 2})'].join('\n'),
                        outputs: [
                            new vscode.NotebookCellOutput([
                                new vscode.NotebookCellOutputItem('application/json', { "a": 1 }),
                                new vscode.NotebookCellOutputItem('application/json', { "b": 2 }),
                            ])
                        ]
                    },
                    {
                        cellKind: vscode.NotebookCellKind.Code,
                        language: 'javascript',
                        metadata: new vscode.NotebookCellMetadata(),
                        source: ['html("<h1>html header 1</h1>");', 'html("<h2>html header 2</h2>'].join('\n'),
                        outputs: [
                            new vscode.NotebookCellOutput([
                                new vscode.NotebookCellOutputItem('text/html', "<h1>html header 1</h1>"),
                                new vscode.NotebookCellOutputItem('text/html', "<h2>html header 2</h2>"),
                            ])
                        ]
                    },
                    {
                        cellKind: vscode.NotebookCellKind.Code,
                        language: 'javascript',
                        metadata: new vscode.NotebookCellMetadata(),
                        source: ['png'].join('\n'),
                        outputs: [
                            new vscode.NotebookCellOutput([
                                new vscode.NotebookCellOutputItem('image/png', `R0lGODdhMAAwAPAAAAAAAP///ywAAAAAMAAwAAAC8IyPqcvt3wCcDkiLc7C0qwyGHhSWpjQu5yqmCYsapyuvUUlvONmOZtfzgFzByTB10QgxOR0TqBQejhRNzOfkVJ+5YiUqrXF5Y5lKh/DeuNcP5yLWGsEbtLiOSpa/TPg7JpJHxyendzWTBfX0cxOnKPjgBzi4diinWGdkF8kjdfnycQZXZeYGejmJlZeGl9i2icVqaNVailT6F5iJ90m6mvuTS4OK05M0vDk0Q4XUtwvKOzrcd3iq9uisF81M1OIcR7lEewwcLp7tuNNkM3uNna3F2JQFo97Vriy/Xl4/f1cf5VWzXyym7PHhhx4dbgYKAAA7`),
                                new vscode.NotebookCellOutputItem('image/png', `R0lGODdhMAAwAPAAAAAAAP///ywAAAAAMAAwAAAC8IyPqcvt3wCcDkiLc7C0qwyGHhSWpjQu5yqmCYsapyuvUUlvONmOZtfzgFzByTB10QgxOR0TqBQejhRNzOfkVJ+5YiUqrXF5Y5lKh/DeuNcP5yLWGsEbtLiOSpa/TPg7JpJHxyendzWTBfX0cxOnKPjgBzi4diinWGdkF8kjdfnycQZXZeYGejmJlZeGl9i2icVqaNVailT6F5iJ90m6mvuTS4OK05M0vDk0Q4XUtwvKOzrcd3iq9uisF81M1OIcR7lEewwcLp7tuNNkM3uNna3F2JQFo97Vriy/Xl4/f1cf5VWzXyym7PHhhx4dbgYKAAA7`),
                            ])
                        ]
                    },
                    {
                        cellKind: vscode.NotebookCellKind.Code,
                        language: 'javascript',
                        metadata: new vscode.NotebookCellMetadata(),
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
                        cellKind: vscode.NotebookCellKind.Code,
                        language: 'javascript',
                        metadata: new vscode.NotebookCellMetadata(),
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
                        cellKind: vscode.NotebookCellKind.Code,
                        language: 'javascript',
                        metadata: new vscode.NotebookCellMetadata(),
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
                        cellKind: vscode.NotebookCellKind.Code,
                        language: 'javascript',
                        metadata: new vscode.NotebookCellMetadata(),
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
                        cellKind: vscode.NotebookCellKind.Code,
                        language: 'python',
                        metadata: new vscode.NotebookCellMetadata(),
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
                        cellKind: vscode.NotebookCellKind.Code,
                        language: 'python',
                        metadata: new vscode.NotebookCellMetadata(),
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
            metadata: metadata.with({ trusted: true, editable: false }),
            cells: [
                {
                    cellKind: vscode.NotebookCellKind.Code,
                    language: 'javascript',
                    metadata: (new vscode.NotebookCellMetadata()).with({ editable: false }),
                    source: 'console.log(1);\nconsole.log(3);\n',
                    outputs: [
                        new vscode.NotebookCellOutput([
                            new vscode.NotebookCellOutputItem('application/x.notebook.stream', 1),
                            new vscode.NotebookCellOutputItem('application/x.notebook.stream', 3)
                        ])
                    ]
                },
                {
                    cellKind: vscode.NotebookCellKind.Code,
                    language: 'javascript',
                    metadata: new vscode.NotebookCellMetadata(),
                    source: ['console.error("");', 'console.error3("");'].join('\n'),
                    outputs: [
                        new vscode.NotebookCellOutput([
                            new vscode.NotebookCellOutputItem('application/x.notebook.error-traceback', {
                                ename: 'error not defined',
                                evalue: 'console.error not defined',
                                traceback: [
                                    "\u001b[0;31m---------------------------------------------------------------------------\u001b[0m",
                                    "\u001b[0;31mNameError\u001b[0m                                 Traceback (most recent call last)",
                                    "\u001b[0;32m<ipython-input-1-f270cadddfe4>\u001b[0m in \u001b[0;36m<module>\u001b[0;34m\u001b[0m\n\u001b[0;32m----> 1\u001b[0;31m \u001b[0mprint\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0ma\u001b[0m \u001b[0;34m+\u001b[0m \u001b[0;36m4\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0m",
                                    "\u001b[0;31mNameError\u001b[0m: name 'a' is not defined"
                                ]
                            })
                        ])
                    ]
                },
                {
                    cellKind: vscode.NotebookCellKind.Code,
                    language: 'javascript',
                    metadata: new vscode.NotebookCellMetadata(),
                    source: 'console.text(1);\nconsole.text(3);\n',
                    outputs: [
                        new vscode.NotebookCellOutput([
                            new vscode.NotebookCellOutputItem('text/plain', 1),
                            new vscode.NotebookCellOutputItem('text/plain', 3)
                        ])
                    ]
                },
                {
                    cellKind: vscode.NotebookCellKind.Code,
                    language: 'javascript',
                    metadata: new vscode.NotebookCellMetadata(),
                    source: ['markdown("# header 1");', 'markdown("### header 3");'].join('\n'),
                    outputs: [
                        new vscode.NotebookCellOutput([
                            new vscode.NotebookCellOutputItem('text/markdown', '# header 1'),
                            new vscode.NotebookCellOutputItem('text/markdown', '### header 3'),
                        ])
                    ]
                },
                {
                    cellKind: vscode.NotebookCellKind.Code,
                    language: 'javascript',
                    metadata: new vscode.NotebookCellMetadata(),
                    source: ['json({"a": 1});', 'json({"b": 3})'].join('\n'),
                    outputs: [
                        new vscode.NotebookCellOutput([
                            new vscode.NotebookCellOutputItem('application/json', { "a": 1 }),
                            new vscode.NotebookCellOutputItem('application/json', { "b": 3 }),
                        ])
                    ]
                },
                {
                    cellKind: vscode.NotebookCellKind.Code,
                    language: 'javascript',
                    metadata: new vscode.NotebookCellMetadata(),
                    source: ['html("<h1>html header 1</h1>");', 'html("<h3>html header 3</h3>'].join('\n'),
                    outputs: [
                        new vscode.NotebookCellOutput([
                            new vscode.NotebookCellOutputItem('text/html', "<h1>html header 1</h1>"),
                            new vscode.NotebookCellOutputItem('text/html', "<h3>html header 3</h3>"),
                        ])
                    ]
                },
                {
                    cellKind: vscode.NotebookCellKind.Code,
                    language: 'javascript',
                    metadata: new vscode.NotebookCellMetadata(),
                    source: ['png2'].join('\n'),
                    outputs: [
                        new vscode.NotebookCellOutput([
                            new vscode.NotebookCellOutputItem('image/png', `R0lGODdhMAAwAPAAAAAAAP///ywAAAAAMAAwAAAC8IyPqcvt3wCcDkiLc7C0qwyGHhSWpjQu5yqmCYsapyuvUUlvONmOZtfzgFzByTB10QgxOR0TqBQejhRNzOfkVJ+5YiUqrXF5Y5lKh/DeuNcP5yLWGsEbtLiOSpa/TPg7JpJHxyendzWTBfX0cxOnKPjgBzi4diinWGdkF8kjdfnycQZXZeYGejmJlZeGl9i2icVqaNVailT6F5iJ90m6mvuTS4OK05M0vDk0Q4XUtwvKOzrcd3iq9uisF81M1OIcR7lEewwcLp7tuNNkM3uNna3F2JQFo97Vriy/Xl4/f1cf5VWzXyym7PHhhx4dbgYKAAA7`),
                            new vscode.NotebookCellOutputItem('image/png', `R0lGODdhMAAwAPAAAAAAAP///ywAAAAAMAAwAAAC8IyPqcvt3wCcDkiLc7C0qwyGHhSWpjQu5yqmCYsapyuvUUlvONmOZtfzgFzByTB10QgxOR0TqBQejhRNzOfkVJ+5YiUqrXF5Y5lKh/DeuNcP5yLWGsEbtLiOSpa/TPg7JpJHxyendzWTBfX0cxOnKPjgBzi4diinWGdkF8kjdfnycQZXZeYGejmJlZeGl9i2icVqaNVailT6F5iJ90m6mvuTS4OK05M0vDk0Q4XUtwvKOzrcd3iq9uisF81M1OIcR7lEewwcLp7tuNNkM3uNna3F2JQFo97Vriy/Xl4/f1cf5VWzXyym7PHhhx4dbgYKAAA7`),
                        ])
                    ]
                },
                {
                    cellKind: vscode.NotebookCellKind.Code,
                    language: 'javascript',
                    metadata: new vscode.NotebookCellMetadata(),
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
                    cellKind: vscode.NotebookCellKind.Code,
                    language: 'javascript',
                    metadata: new vscode.NotebookCellMetadata(),
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
                    cellKind: vscode.NotebookCellKind.Code,
                    language: 'javascript',
                    metadata: new vscode.NotebookCellMetadata(),
                    source: 'mix png and html',
                    outputs: [
                        /**
                         * {
                         *  "cellKind": Text
                         *  "text": ""
                         * }
                         * {
                         *  "cellKind": Rich
                         *  "data": ""
                         * }
                         */
                        new vscode.NotebookCellOutput([
                            new vscode.NotebookCellOutputItem('text/html', "<h2>html header 2</h2>"),
                            new vscode.NotebookCellOutputItem('image/png', `R0lGODdhMAAwAPAAAAAAAP///ywAAAAAMAAwAAAC8IyPqcvt3wCcDkiLc7C0qwyGHhSWpjQu5yqmCYsapyuvUUlvONmOZtfzgFzByTB10QgxOR0TqBQejhRNzOfkVJ+5YiUqrXF5Y5lKh/DeuNcP5yLWGsEbtLiOSpa/TPg7JpJHxyendzWTBfX0cxOnKPjgBzi4diinWGdkF8kjdfnycQZXZeYGejmJlZeGl9i2icVqaNVailT6F5iJ90m6mvuTS4OK05M0vDk0Q4XUtwvKOzrcd3iq9uisF81M1OIcR7lEewwcLp7tuNNkM3uNna3F2JQFo97Vriy/Xl4/f1cf5VWzXyym7PHhhx4dbgYKAAA7`),
                        ])
                    ]
                },
                {
                    cellKind: vscode.NotebookCellKind.Code,
                    language: 'javascript',
                    metadata: new vscode.NotebookCellMetadata(),
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
                    cellKind: vscode.NotebookCellKind.Code,
                    language: 'python',
                    metadata: new vscode.NotebookCellMetadata(),
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
                    cellKind: vscode.NotebookCellKind.Code,
                    language: 'python',
                    metadata: new vscode.NotebookCellMetadata(),
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
                },
                // bug report, multiple stream items with ansi
                {
                    // application/geo+json
                    cellKind: vscode.NotebookCellKind.Code,
                    language: 'python',
                    metadata: new vscode.NotebookCellMetadata(),
                    source: [
                        "a",
                        "\u001b[A",
                        "b"
                       ].join(''),
                    outputs: [
                        new vscode.NotebookCellOutput([
                            new vscode.NotebookCellOutputItem('application/x.notebook.stream', [
                                "Line1\n",
                                "\n",
                                "\u001b[ALine3\n",
                                "Line4"
                               ].join('')),
                        ]),
                        new vscode.NotebookCellOutput([
                            new vscode.NotebookCellOutputItem('text/markdown2', '## header 2'),
                        ])
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

class Kernel implements vscode.NotebookKernel {
    id = 'mimetype_test-kernel';
    label: string = 'Mimetype Test Kernel'
    supportedLanguages: string[] = ['javascript', 'typescript'];

    executeCell(document: vscode.NotebookDocument, cell: vscode.NotebookCell): void {
        throw new Error('Method not implemented.');
    }

    cancelCellExecution(document: vscode.NotebookDocument, cell: vscode.NotebookCell): void {
        throw new Error('Method not implemented.');
    }

    executeAllCells(document: vscode.NotebookDocument): void {
        throw new Error('Method not implemented.');
    }

    cancelAllCellsExecution(document: vscode.NotebookDocument): void {
        throw new Error('Method not implemented.');
    }
}

export class MimeTypeKernelProvider implements vscode.NotebookKernelProvider {
    private _kernels: vscode.NotebookKernel[];
    constructor() {
        this._kernels = [new Kernel()];
    }
    // onDidChangeKernels?: vscode.Event<vscode.NotebookDocument | undefined> | undefined;
    provideKernels(document: vscode.NotebookDocument, token: vscode.CancellationToken): vscode.ProviderResult<vscode.NotebookKernel[]> {
        return this._kernels;
    }
}
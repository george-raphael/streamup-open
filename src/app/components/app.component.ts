import { HttpClientService } from './../services/http-client.service';
import { DB } from './../extensions/db/db';
import { Mkdir as Dir } from './../extensions/sync/dir';
import { AppState } from './../store/appState.store';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import electron = require('electron');
let { ipcRenderer } = electron;

@Component({
    selector: 'sbox',
    styleUrls: ['./app.theme.scss'],
    encapsulation: ViewEncapsulation.None,
    templateUrl: './app.component.html',
    providers: [HttpClientService]
})
export class AppComponent implements OnInit {
    isDarkTheme: boolean = false;
    db = new DB();
    dir = new Dir();
    constructor(private http: HttpClientService) {
        //testing if http works very well.!
        this.http.get('http://localhost:8000/api/folders/list/undefined').subscribe(result => {
            console.log(result);
        }, (err) => {
            console.log(err);
        });
    }
    ngOnInit() {

        this.dir.create('Sbox');
    }
    isAutoSync(): boolean {

        return false;
    }
    createFolder(name: String) {

        this.dir.create('Sbox/' + name);

    }
    checkAuthentication() { }
}

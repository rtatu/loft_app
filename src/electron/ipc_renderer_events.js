
/**
 * 
 * 
 */

// routes renderer_events
const RoutesEvents = {
    database_maintenance : function(e){
        e.preventDefault();

        ipcRenderer.send('database-maintenance', {name : "DM"})
    }
}
mod redis_connection;
use redis_connection::RedisConnectionMod::RedisConnection;

#[cfg(target_os = "windows")]
mod os_windows;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

#[tauri::command]
fn get_all_keys() -> Result<String, String> {
    println!("chegou aqui na func");

    let mut client = RedisConnection::new(String::from("127.0.0.1"), 6379);

    println!("after connection");

    let populate_response = client.populate();

    match populate_response {
        Ok(()) => {
            println!("Populou")
        }
        Err(_) => {
            println!("Deu ruim no populate");
        }
    }

    println!("vai pegar keys");
    match client.keys() {
        Ok(all_keys) => Ok(all_keys.join(",")),
        Err(_) => {
            println!("deu merda");
            Err(String::from("Deu ruim"))
        }
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, get_all_keys])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

extern crate redis;

pub mod RedisConnectionMod {
    use redis::Commands;

    pub struct RedisConnection {
        pub connection: Option<redis::Connection>,
        pub host: String,
        pub port: u16,
    }

    impl RedisConnection {
        pub fn new(host: String, port: u16) -> RedisConnection {
            RedisConnection {
                host: host,
                port: port,
                connection: None,
            }
        }

        fn get_connection(&mut self) -> redis::RedisResult<&mut redis::Connection> {
            if self.connection.is_some() {
                Ok(self.connection.as_mut().unwrap())
            } else {
                let connection_string = format!("redis://{0}:{1}", self.host, self.port);
                self.connection =
                    Some(redis::Client::open(connection_string.as_ref())?.get_connection()?);
                Ok(self.connection.as_mut().unwrap())
            }
        }

        pub fn populate(&mut self) -> redis::RedisResult<()> {
            let connection = self.get_connection()?;

            connection.set("bata", "ta")?;
            connection.set("idaslon", "foi")?;

            Ok(())
        }

        pub fn keys(&mut self) -> redis::RedisResult<Vec<String>> {
            let key_iter: redis::Iter<String> = self.get_connection()?.scan()?;
            Ok(key_iter.collect())
        }
    }
}

desc "Install node modules"
    task :install_node_modules do
        on roles(:app) do
            within release_path do
                execute :npm, 'install', '-s'
            end
        end
    end

desc "Stop node application"
    task :node_stop do
        on roles(:app) do
            execute :forever, 'stopall'
        end
    end

desc "Start node"
    task :node_start do
        on roles(:app) do
            within release_path do
                execute :forever, 'start', 'server.js'
            end
        end
    end